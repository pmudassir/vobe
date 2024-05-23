import { Injectable } from '@nestjs/common';

@Injectable()
export class OtpService {
  async getOtp() {
    return '12345';
  }

  async validateOtp(otp: string) {
    const valid = otp === '12345' ? true : false;
    return valid;
  }
}
