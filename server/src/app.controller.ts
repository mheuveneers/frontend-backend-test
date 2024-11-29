import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { NextDelivery } from 'domain/interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('comms/your-next-delivery/:userId')
  getNextDelivery(@Param('userId') userId: string): NextDelivery {
    return this.appService.getNextDelivery(userId);
  }
}
