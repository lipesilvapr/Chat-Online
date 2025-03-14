import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../schemas/message.schema';
import { MessagesGateway } from './messages.gateway'; // <- importa o gateway (ajuste o path se necessário)

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
    private readonly messagesGateway: MessagesGateway, // <- injeta o gateway aqui
  ) {}

  async createMessage(content: string, sender: object): Promise<Message> {
    const newMessage = new this.messageModel({ content, sender });
    const savedMessage = await newMessage.save();

    // Emite o evento para os clientes conectados via socket.io
    this.messagesGateway.sendNewMessageToClients(savedMessage);

    return savedMessage;
  }

  async getAllMessages(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }
}
