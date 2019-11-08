import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {ChatService} from './chat.service';
import {AuthGuard} from '@nestjs/passport';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getMessage() {
        return this.chatService.getMessage();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createMessage(@Body() body) {
        return this.chatService.createMessage(body);
    }
}
