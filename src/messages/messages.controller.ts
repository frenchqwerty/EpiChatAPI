import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller('messages')
export class MessagesController {
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.message;
    }
}
