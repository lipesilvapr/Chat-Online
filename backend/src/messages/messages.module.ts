import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from '../schemas/message.schema';
import { MessagesGateway } from './messages.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Message.name, schema: MessageSchema}]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesGateway],
})
export class MessagesModule {}
