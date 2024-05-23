import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthRepository } from '../repositories/auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  JwtStrategy,
  LocalStrategy,
  RefreshTokenStrategy,
} from '../passport/strategies';
import { UserController, AuthController } from '../controllers';
import { OtpService } from '../otp.service';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3600s' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController, UserController],
  providers: [
    AuthRepository,
    LocalStrategy,
    JwtStrategy,
    RefreshTokenStrategy,
    OtpService,
    PrismaService
  ],
})
export class AuthModule {}
