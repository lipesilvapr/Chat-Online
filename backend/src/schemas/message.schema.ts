import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Message extends Document {
  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  timestamp: Date;

  @Prop({
    required: true,
    type: {
      name: { type: String, required: true },
      email: { type: String, required: true }
    }
  })
  sender: {
    name: string;
    email: string;
  };
}

export const MessageSchema = SchemaFactory.createForClass(Message);