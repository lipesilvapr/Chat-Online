import { Body, Controller, Get, Post } from '@nestjs/common';
import { Message } from '../schemas/message.schema';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async createMessage(
    @Body('content') content: string,
    @Body('sender') sender: object,
  ): Promise<Message> {
    return this.messagesService.createMessage(content, sender);
  }  

  @Get()
  async getAllMessages(): Promise<Message[]> {
    return this.messagesService.getAllMessages();
  }
}