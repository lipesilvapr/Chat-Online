import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class MessagesGateway {
    @WebSocketServer()
    server: Server;
  
    
    sendNewMessageToClients(message: any) {
      this.server.emit('newMessage', message); 
    }
  }
  