import {Module} from '@nestjs/common';
import {ChatGateway} from './chat.gateway';
import {ChatController} from './chat.controller';
import {ChatService} from './chat.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Chat} from './chat.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Chat])],
    providers: [ChatGateway, ChatService],
    exports: [ChatService],
    controllers: [ChatController],
})
export class ChatModule {}
