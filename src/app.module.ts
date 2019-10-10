import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {UsersController} from './users/users.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: 'localhost',
            database: 'epichat',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            logging: false,
        }),
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController, UsersController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
