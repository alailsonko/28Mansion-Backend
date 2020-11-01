import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm'
import User from './User'

export enum PostStatus {
  PUBLIC = 'public',
  PRIVATE = 'private',
  OUTDATED = 'outdated',
  UNKNOW = 'unknow'
}

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'title',
    type: 'varchar'
  })
  title: string

  @Column({
    name: 'content',
    type: 'varchar'
  })
  content: string

  @Column({
    name: 'tags',
    type: 'simple-array',
    nullable: true
  })
  tags: string[]

  @Column({
    name: 'status',
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.PUBLIC
  })
  status: PostStatus

  @CreateDateColumn({
    name: 'createdAt',
    type: 'timestamp'
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updatedAt',
    type: 'timestamp'
  })
  updatedAt: Date

  @ManyToOne(() => User, user => user.id, {
    eager: true,
    onDelete: 'CASCADE'
  })
  user: User
}

export default Post
