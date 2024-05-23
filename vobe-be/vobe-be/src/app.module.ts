import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PubModule } from './pub/app/pub.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/app/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/passport/guards';
import { CacheModule } from '@nestjs/cache-manager';
import { ImagekitModule } from './imagekit/imagekit.module';
import { NotificationModule } from './notification/app/notification.module';

@Module({
  imports: [
    PubModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CacheModule.register({
      isGlobal: true
    }),
    ImagekitModule.registerAsync({
      isGlobal: true,
      useFactory: (configService: ConfigService) => {
        return {
          imageKit: {
            publicKey: configService.get('IMAGE_KIT_PUBLIC_KEY'),
            privateKey: configService.get('IMAGE_KIT_PRIVATE_KEY'),
            urlEndpoint: configService.get('IMAGE_KIT_URL_ENDPOINT'),
          },
        };
      },
      inject: [ConfigService],
    }),
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
