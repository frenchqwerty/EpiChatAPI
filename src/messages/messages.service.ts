import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Message} from './message.entity';
import {Repository, ObjectID} from 'typeorm';

@Injectable()
export class MessagesService {

    constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>) {}

    findAll(): Promise<Message[]> {
        return this.messageRepository.find();
    }

    async findOne(messageID: ObjectID): Promise<Message | undefined> {
        return await this.messageRepository.findOne({id: messageID});
    }

    // async findAllByChannel(chan: string): Promise<Message | undefined> {
    //     return await this.messageRepository.find({where: {channel: chan}});
    // }

    async createMessage(userID: ObjectID, chan: string, message: string): Promise<any> {
        const newMessage = {
            user_id: userID,
            channel: chan,
            msg: message,
        };
        await this.messageRepository.save(newMessage);
    }
}
