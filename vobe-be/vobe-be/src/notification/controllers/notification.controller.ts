import { Body, Controller, Delete, Post, Req } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  @Post('subscribe')
  async updateUserDetails(@Body('token') token: string, @Req() req) {
    return this.notificationRepository.addToken(token, req.user.id);
  }

  @Delete('unsubscribe')
  async unsubscribeNotifications(@Req() req) {
    return this.notificationRepository.unsubscribe(req.user.id);
  }
}
