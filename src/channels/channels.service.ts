import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Channel} from './channel.entity';
import {Repository, ObjectID} from 'typeorm';

@Injectable()
export class ChannelsService {

    constructor(@InjectRepository(Channel) private readonly channelRepository: Repository<Channel>) {}

    findAll(): Promise<Channel[]> {
        return this.channelRepository.find();
    }

    async findOne(channelId: ObjectID): Promise<Channel | undefined> {
        return await this.channelRepository.findOne({id: channelId});
    }

    async createChannel(nameChan: string, creatorChan: ObjectID): Promise<any> {
        const newChannel = {
            name: nameChan,
            creator: creatorChan,
        };
        await this.channelRepository.save(newChannel);
    }
}
