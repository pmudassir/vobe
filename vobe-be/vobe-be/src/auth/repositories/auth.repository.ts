import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateUserDto, LogoutUserDto, UpdateUserDto } from '../dto';
import { JwtService } from '@nestjs/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { OtpService } from '../otp.service';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly otpService: OtpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async login(user: any) {
    const payload = {
      phone: user.phone,
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      type: user.type,
      assignedPubId: user.assignedPubId
    };
    return {
      ...payload,
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: '7d',
      }),
    };
  }

  async refreshToken(user: any) {
    const payload = { phone: user.phone, id: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async createUser(createUserDto: CreateUserDto) {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: {
          phone: createUserDto.phone,
        },
      });
      if (user) {
        Logger.log(
          `User with Mobile No. ${createUserDto.phone} Already exists`,
        );
        return;
      }
      const newUser = await tx.user.create({
        data: {
          ...createUserDto,
          lastLogin: new Date(),
          active: true,
        },
      });
      return newUser;
    });
  }

  async validateUser(phone: string, otp: string) {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: {
          phone: phone,
        },
      });
      if (!user) {
        throw new UnauthorizedException(
          `User with mobile no. ${phone} Not Found. Enter Correct Email or Create New Account`,
        );
      }
      const isOtpValid = await this.otpService.validateOtp(otp);
      if (user && isOtpValid) {
        await this.prisma.user.update({
          where: {
            phone: phone,
          },
          data: {
            lastLogin: new Date(),
          },
        });
        return {
          id: user.id,
          phone: user.phone,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          lastLogin: user.lastLogin,
          type: user.type,
          assignedPubId: user.assignedPubId
        };
      } else throw new UnauthorizedException('Incorrect Otp provided');
    });
  }

  async getUserDetails(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        phone: true,
        firstName: true,
        lastName: true,
        email: true,
        lastLogin: true,
      },
    });
  }

  async updateUserDetails(userId: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...updateUserDto,
      },
      select: {
        id: true,
        phone: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
  }

  async logout(logoutUserDto: LogoutUserDto) {
    await this.cacheManager.set(logoutUserDto.accessToken, true, 3600000);
    await this.cacheManager.set(logoutUserDto.refreshToken, true, 604800000);
  }

  async deleteUser(userId: string) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: '',
        firstName: 'deleted User',
        lastName: 'deleted User',
        active: false,
        phone: '',
      },
    });
  }

  async test() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}