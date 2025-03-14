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
  
    // Chame isso no seu serviço ou controller após salvar a mensagem no banco
    sendNewMessageToClients(message: any) {
      this.server.emit('newMessage', message); // <- Nome do evento, tem que bater com o do front!
    }
  }
  