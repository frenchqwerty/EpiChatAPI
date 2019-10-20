import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import {Repository} from 'typeorm';

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
        const newUser = {
            email: userEmail,
            password: passwd,
        };
        await this.userRepository.save(newUser);
        const {password, ...result} = newUser;
        return result;
    }
}
