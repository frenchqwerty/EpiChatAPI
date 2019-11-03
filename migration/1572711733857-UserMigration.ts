import {MigrationInterface, QueryRunner} from 'typeorm';

export class UserMigration1572711733857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.clearTable('user');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
