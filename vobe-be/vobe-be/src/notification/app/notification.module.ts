import { Module } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';
import { NotificationController } from '../controllers/notification.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [NotificationController],
  providers: [NotificationRepository, PrismaService],
})
export class NotificationModule {}
