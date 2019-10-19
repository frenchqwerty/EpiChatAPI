import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {UsersController} from './users/users.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {User} from './users/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            useNewUrlParser: true,
            url: 'mongodb+srv://epichat:t87o7m7pXvHDbTBo@epichatcluster-aq3e2.mongodb.net/EpiChat?retryWrites=true&w=majority',
            ssl: true,
            useUnifiedTopology: true,
            entities: [User],
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
