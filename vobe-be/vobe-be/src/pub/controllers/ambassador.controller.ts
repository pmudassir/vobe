import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PubRepository } from '../repositories/pub.repository';
import { CreateEventDto } from '../dtos';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AmbassadorGuard } from 'src/auth/passport/guards';

@Controller('ambassador')
@UseGuards(AmbassadorGuard)
export class AmbassadorController {
  constructor(private readonly pubRepository: PubRepository) {}
  
  @Get('bookings')
  async getBookings(@Req() req) {
    return this.pubRepository.getBookings(req.user.assignedPubId);
  }

  @Get('pub')
  async getAssignedPub(@Req() req) {
    return this.pubRepository.getAssignedPub(req.user.assignedPubId);
  }

  @Post('stories')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      limits: { fieldSize: 50 * 1024 * 1024 }, // 50 is max mb size
    }),
  )
  async createStories(
    @Req() req,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.pubRepository.createStories(req.user.assignedPubId, req.user.id, files);
  }

  @Post('event')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fieldSize: 25 * 1024 * 1024 }, // 25 is max mb size
    }),
  )
  async createEvent(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Body() body: CreateEventDto,
  ) {
    return this.pubRepository.createEvent(req.user.assignedPubId, req.user.id, body, file);
  }
}
