import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  CreateUser(body) {
    // tslint:disable-next-line:no-console
    console.log(body);


    //verification de tout
    //return 201 si ok sinon 413 a verifier
    //mise en bdd


  }
}
