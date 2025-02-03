import { Controller, Get } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Controller()
export class AppController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get('/teste')
  getTestMessage() {
    return { message: 'Backend conectado com sucesso!' };
  }

  @Get('test-db')
  async testDatabaseConnection() {
    try {
      const isConnected = this.connection.readyState === 1;
      console.log('MongoDB connection status:', isConnected ? 'Connected' : 'Not Connected');
      return { status: isConnected ? 'Connected' : 'Not Connected' };
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      return { status: 'Error', message: error.message };
    }
  }
}
