import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { svc } from 'firebase-config';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class NotificationRepository {
  constructor(private readonly prisma: PrismaService) {
    firebase.initializeApp({
      credential: firebase.credential.cert(<firebase.ServiceAccount>svc),
    });
  }

  async addToken(token: string, userId: string) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        fcmToken: token,
      },
    });
    return user;
  }

  async unsubscribe(userId: string) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        fcmToken: null,
      },
    });
    return user;
  }
  
  async sendNotification() {
    firebase.messaging();
  }
}
