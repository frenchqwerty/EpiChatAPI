import {OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {ChatService} from './chat.service';

@WebSocketGateway(8888)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server;
  users: number = 0;
  constructor(private chatService: ChatService) {}

  async handleConnection() {
    this.users++;
    this.server.emit('users', this.users);
  }

  async handleDisconnect() {
    this.users--;
    this.server.emit('users', this.users);
  }

  @SubscribeMessage('chat')
    async onChat(client, message) {
      this.server.emit('chat', message);
      await this.chatService.createMessage(message);
    }
}
