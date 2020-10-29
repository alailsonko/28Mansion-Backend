import { DeepPartial } from 'typeorm'
import { PostStatus } from '../entities/Post'
import type User from '../entities/User'

export interface AddPost {
  title: string
  content: string
  tags: string[]
  status: PostStatus
  user?: User | DeepPartial<User>
}
