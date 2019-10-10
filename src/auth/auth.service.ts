import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
                private readonly jwtService: JwtService) {}

    async validateUser(userName: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(userName);
        if (user && user.password === pass) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {username: user.username, sub: user.userId};
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async register(body: any): Promise<any> {
        return await this.userService.createUser(body.username, body.password);
    }
}
