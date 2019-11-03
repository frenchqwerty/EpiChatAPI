import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {UsersController} from './users/users.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController, UsersController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
