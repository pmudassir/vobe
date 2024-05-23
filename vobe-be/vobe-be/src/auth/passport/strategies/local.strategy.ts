import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthRepository } from 'src/auth/repositories/auth.repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authRepository:AuthRepository) {
    super();
  }

  async validate(phone: string, otp: string) {
    const user = await this.authRepository.validateUser(phone, otp);
    return user;
  }
}
