import {Entity, Column, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity()
export class Message {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    user_id: ObjectID;

    @Column()
    channel: string;
}