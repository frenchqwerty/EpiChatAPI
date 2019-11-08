import {Body, Controller, Delete, Get, Patch, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return this.usersService.getProfile(req.user.email);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('me')
    patchProfile(@Body() body, @Request() req) {
        return this.usersService.editUser(body, req.user);
    }
}
