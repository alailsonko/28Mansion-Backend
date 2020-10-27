import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import Post from './Post'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'username',
    type: 'varchar'
  })
  username: string

  @Column({
    name: 'email',
    type: 'varchar'
  })
  email: string

  @Column({
    name: 'profile',
    type: 'varchar',
    nullable: true
  })
  profile: string

  @Column({
    name: 'password',
    type: 'varchar'
  })
  password: string

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

  @OneToMany(() => Post, post => post.user)
  posts: Post[]
}

export default User
