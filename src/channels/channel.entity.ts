import {Entity, Column, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity()
export class Channel {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    creator: ObjectID
}
