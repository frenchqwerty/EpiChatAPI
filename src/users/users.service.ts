import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import {Repository} from 'typeorm';
import {EditUserInterface} from '../interfaces/EditUserInterface';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(userEmail: string): Promise<User | undefined> {
        return await this.userRepository.findOne({email: userEmail});
    }

    async createUser(userEmail: string, passwd: string): Promise<any> {
        const hash = bcrypt.hashSync(passwd, 10);
        const newUser = {
            email: userEmail,
            password: hash,
        };
        await this.userRepository.save(newUser);
        const {password, ...result} = newUser;
        return result;
    }

    async editUser(body: EditUserInterface, req: any) {
        if (body.email) {
            await this.userRepository.update({email: req.email}, {email: body.email});
        }
        if (body.age) {
            await this.userRepository.update({email: req.email}, {age: body.age});
        }
        if (body.name) {
            await this.userRepository.update({email: req.email}, {name: body.name});
        }
        if (body.phone) {
            await this.userRepository.update({email: req.email}, {phone: body.phone});
        }
    }

    async getProfile(email: string) {
        return await this.userRepository.findOne({email});
    }
}
