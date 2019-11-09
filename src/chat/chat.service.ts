import { Injectable } from '@nestjs/common';
import {ChatInterface} from '../interfaces/ChatInterface';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Chat} from './chat.entity';

@Injectable()
export class ChatService {
    constructor(@InjectRepository(Chat) private readonly chatRepository: Repository<Chat>) {}

    async getMessage(): Promise<Chat[]> {
        return await this.chatRepository.find();
    }

    async createMessage(body: string | ChatInterface) {
        return await this.chatRepository.save(JSON.parse(body as string));
    }
}
