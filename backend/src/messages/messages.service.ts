import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
  ) {}

  async createMessage(content: string): Promise<Message> {
    const newMessage = new this.messageModel({ content });
    return await newMessage.save();
  }

  async getAllMessages(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }
}