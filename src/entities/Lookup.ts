import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('lookup')
class Lookup {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'name',
    type: 'varchar'
  })
  name: string

  @Column({
    name: 'code',
    type: 'varchar'
  })
  code: string

  @Column({
    name: 'type',
    type: 'varchar'
  })
  type: string

  @Column({
    name: 'position',
    type: 'varchar'
  })
  position: string

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

export default Lookup
