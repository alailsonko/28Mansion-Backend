import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('tags')
class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'name',
    type: 'varchar'
  })
  name: string

  @Column({
    name: 'frequency',
    type: 'varchar'
  })
  frequency: string

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
}

export default Tag
