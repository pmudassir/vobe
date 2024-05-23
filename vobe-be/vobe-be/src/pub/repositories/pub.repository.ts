import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { ImageKitService } from 'src/imagekit/imagekit.service';
import { CreateBookingDto, CreateEventDto } from '../dtos';
import { format } from 'date-fns';

@Injectable()
export class PubRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageKitService: ImageKitService,
  ) {}

  async getPubDetails(pubId: string) {
    const pub = await this.prisma.pub.findUnique({
      where: {
        id: pubId,
      },
      select: {
        id: true,
        name: true,
        address: true,
        phone: true,
        tags: true,
        mapsLink: true,
        about: true,
        foodMenu: true,
        barMenu: true,
        profileImage: true,
        openTime: true,
        closeTime: true,
        active: true,
        type: true,
        Features: {
          select: {
            name: true,
            icon: true,
          },
        },
        timeSlots: true,
      },
    });
    return pub;
  }

  async getPubStories(pubId: string) {
    const stories = await this.prisma.story.findMany({
      where: {
        pubId: pubId,
      },
      take: 6,
      select: {
        imageUrl: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return stories.map((story) => ({
      ...story,
      imageUrl: story.imageUrl
        ? this.imageKitService.getSignedUrl(story.imageUrl)
        : null,
    }));
  }

  async getBookings(pubId: string) {
    const bookings = await this.prisma.booking.findMany({
      where: {
        pubId: pubId,
        bookingDate: format(new Date(), 'yyyy-MM-dd'),
      },
      select: {
        id: true,
        userId: true,
        pubId: true,
        bookingDate: true,
        timeSlot: true,
        peopleCount: true,
        needValet: true,
        carNumber: true,
        createdAt: true,
        isCancelled: true,
        cancelDate: true,
        cancelReason: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return bookings;
  }

  async getEvents() {
    const upcomingEvents = await this.prisma.event.findMany({
      where: {
        startDate: {
          gte: format(new Date(), 'yyyy-MM-dd'),
        },
      },
      select: {
        title: true,
        description: true,
        imageUrl: true,
        startDate: true,
        active: true,
        Pub: {
          select: {
            name: true,
          },
        },
        createdAt: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
    return upcomingEvents.map((event) => ({
      ...event,
      imageUrl: event.imageUrl
        ? this.imageKitService.getSignedUrl(event.imageUrl)
        : null,
    }));
  }

  async getPubCardDisplay() {
    const pubs = await this.prisma.pub.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        tags: true,
        about: true,
        profileImage: true,
        openTime: true,
        closeTime: true,
        type: true,
        Features: {
          select: {
            name: true,
            icon: true,
          },
        },
      },
    });
    for(const pub of pubs) {
      const existingBookings = await this.prisma.booking.count({
        where: {
          pubId: pub.id,
          bookingDate: format(new Date(), 'yyyy-MM-dd'),
        },
      });
      pub['bookingsLeft'] = 5 - existingBookings;
    }
    return pubs;
  }

  async createBooking(
    pubId: string,
    userId: string,
    createBookingDto: CreateBookingDto,
  ) {
    const existingBookings = await this.prisma.booking.count({
      where: {
        pubId: pubId,
        bookingDate: format(new Date(), 'yyyy-MM-dd'),
      },
    });
    if (existingBookings >= 5) {
      throw new BadRequestException('All Tables Booked');
    }
    return this.prisma.booking.create({
      data: {
        userId: userId,
        pubId: pubId,
        bookingDate: format(new Date(), 'yyyy-MM-dd'),
        ...createBookingDto,
      },
    });
  }

  async createStories(
    pubId: string,
    userId: string,
    files: Express.Multer.File[],
  ) {
    const stories = [];
    for (const file of files) {
      const { filePath } = await this.imageKitService.uploadObject(
        file.buffer,
        file.originalname,
        `Stories/${pubId}`,
      );
      stories.push({
        pubId: pubId,
        imageUrl: filePath,
        createdBy: userId,
      });
    }
    return this.prisma.story.createMany({
      data: stories,
    });
  }

  async createEvent(
    pubId: string,
    userId: string,
    createEventDto: CreateEventDto,
    file: Express.Multer.File,
  ) {
    const { filePath } = await this.imageKitService.uploadObject(
      file.buffer,
      file.originalname,
      `Events/${pubId}`,
    );
    return this.prisma.event.create({
      data: {
        ...createEventDto,
        imageUrl: filePath,
        pubId: pubId,
        createdBy: userId,
      },
    });
  }

  async cancelBooking(bookingId: string, cancelReason?: string) {
    return this.prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        isCancelled: true,
        cancelDate: new Date(),
        cancelReason: cancelReason ? cancelReason : null,
      },
    });
  }

  async getAssignedPub(pubId: string) {
    const assignedPub = await this.prisma.pub.findUnique({
      where: {
        id: pubId,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return assignedPub;
  }
}
