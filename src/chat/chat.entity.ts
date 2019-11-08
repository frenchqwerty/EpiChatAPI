import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    message: string;
}
