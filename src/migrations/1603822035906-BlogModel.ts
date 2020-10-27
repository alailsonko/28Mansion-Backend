import { MigrationInterface, QueryRunner } from 'typeorm'

export class BlogModel1603822035906 implements MigrationInterface {
  name = 'BlogModel1603822035906'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "username" character varying NOT NULL,
                "email" character varying NOT NULL,
                "profile" character varying,
                "password" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TYPE "posts_status_enum" AS ENUM('public', 'private', 'outdated')
        `)
    await queryRunner.query(`
            CREATE TABLE "posts" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "content" character varying NOT NULL,
                "tags" text,
                "status" "posts_status_enum" NOT NULL DEFAULT 'public',
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "userId" uuid,
                CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TYPE "comments_status_enum" AS ENUM('approved', 'disapproved')
        `)
    await queryRunner.query(`
            CREATE TABLE "comments" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "content" character varying NOT NULL,
                "status" "comments_status_enum" NOT NULL DEFAULT 'approved',
                "author" character varying NOT NULL,
                "email" character varying NOT NULL,
                "url" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "postId" uuid,
                CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TABLE "lookup" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "code" character varying NOT NULL,
                "type" character varying NOT NULL,
                "position" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_833198839cfe88ebbad07e5aca6" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TABLE "tags" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "frequency" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            ALTER TABLE "posts"
            ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "comments"
            ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"
        `)
    await queryRunner.query(`
            ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"
        `)
    await queryRunner.query(`
            DROP TABLE "tags"
        `)
    await queryRunner.query(`
            DROP TABLE "lookup"
        `)
    await queryRunner.query(`
            DROP TABLE "comments"
        `)
    await queryRunner.query(`
            DROP TYPE "comments_status_enum"
        `)
    await queryRunner.query(`
            DROP TABLE "posts"
        `)
    await queryRunner.query(`
            DROP TYPE "posts_status_enum"
        `)
    await queryRunner.query(`
            DROP TABLE "users"
        `)
  }
}
