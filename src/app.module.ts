import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {UsersController} from './users/users.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {ChatGateway} from './chat/chat.gateway';
import {ChatModule} from './chat/chat.module';
import {ChatController} from './chat/chat.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        AuthModule,
        UsersModule,
        ChatModule,
    ],
    controllers: [AppController, UsersController, ChatController],
    providers: [AppService, ChatGateway],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
