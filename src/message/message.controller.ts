import { CreateMessage } from './message.model';
import { MessageService } from './message.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';

@Controller('api/message')
export class MessageController {
  constructor(private service: MessageService) {}
  @Post('/')
  create(@Body() body: CreateMessage) {
    console.log(body);

    return this.service.create(body);
  }
}
