import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { PubRepository } from '../repositories/pub.repository';
import { CreateBookingDto } from '../dtos';

@Controller('pub')
export class PubController {
  constructor(private readonly pubRepository: PubRepository) {}

  @Get('events')
  async getEvents() {
    return this.pubRepository.getEvents();
  }

  @Get(':id')
  async getPub(@Param('id') id: string) {
    return this.pubRepository.getPubDetails(id);
  }

  @Get(':id/stories')
  async getStories(@Param('id') id: string) {
    return this.pubRepository.getPubStories(id);
  }

  @Get()
  async getPubs() {
    return this.pubRepository.getPubCardDisplay();
  }

  @Post(':id/booking')
  async bookPub(
    @Param('id') id: string,
    @Body() body: CreateBookingDto,
    @Req() req,
  ) {
    return this.pubRepository.createBooking(id, req.user.id, body);
  }

  @Delete(':id/booking/:bookingId')
  async cancelBooking(
    @Param('bookingId') bookingId: string,
    @Body('cancelReason') cancelReason: string,
  ) {
    return this.pubRepository.cancelBooking(bookingId, cancelReason);
  }
}
