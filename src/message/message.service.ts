/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message, CreateMessage } from './message.model';
@Injectable()
export class MessageService {
  constructor(@InjectModel(Message) private message: typeof Message) {}
  async create(body: CreateMessage) {
    const message = await this.message.create(body);
    return message;
  }
}
