import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default: null})
    name: string;

    @Column({default: null})
    phone: string;

    @Column({default: null})
    profession: string;

    @Column({default: null})
    age: number;
}
