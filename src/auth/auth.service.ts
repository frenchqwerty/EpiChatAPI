import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
                private readonly jwtService: JwtService) {}

    async validateUser(userName: string, pass: string) {
        const user: any = await this.userService.findOne(userName);
        if (user && bcrypt.compareSync(pass, user.password)) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {email: user.email, sub: user.userId};
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async register(body: any): Promise<any> {
        return await this.userService.createUser(body.email, body.password);
    }
}
