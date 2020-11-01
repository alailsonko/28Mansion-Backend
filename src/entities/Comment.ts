import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm'
import Post from './Post'

export enum CommentStatus {
  APPROVED = 'approved',
  DISAAPPROVED = 'disapproved'

}

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'content',
    type: 'varchar'
  })
  content: string

  @Column({
    name: 'status',
    type: 'enum',
    enum: CommentStatus,
    default: CommentStatus.APPROVED
  })
  status: CommentStatus

  @Column({
    name: 'author',
    type: 'varchar'
  })
  author: string

  @Column({
    name: 'email',
    type: 'varchar'
  })
  email: string

  @Column({
    name: 'url',
    type: 'varchar'
  })
  url: string

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

  @ManyToOne(() => Post, post => post.id, {
    onDelete: 'CASCADE',
    eager: true
  })
  post: Post
}

export default Comment
