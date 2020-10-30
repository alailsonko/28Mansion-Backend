import { getRepository } from 'typeorm'
import Post from '../entities/Post'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

async function GetPostByIdService (idParam: string): Promise<HttpResponse> {
  const postsRepository = getRepository(Post)

  const postById = await postsRepository.findOne({
    where: { id: idParam }
  }).then((post) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    tags: post.tags,
    status: post.status,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    user: {
      id: post.user.id,
      username: post.user.username,
      profile: post.user.profile
    }
  })).catch(() => ({ error: 'post not found' }))

  return { statusCode: 200, statusMessage: postById }
}

export default GetPostByIdService
