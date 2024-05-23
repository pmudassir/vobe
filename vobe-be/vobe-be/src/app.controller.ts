import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/decorators';

@Controller()
export class AppController {
  constructor() {}
  
  @Public()
  @Get("health")
  getHealth() {
    return "Ok from Backend Server."
  }
}
