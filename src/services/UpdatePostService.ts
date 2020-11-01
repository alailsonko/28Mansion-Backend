import { getRepository } from 'typeorm'
import Post from '../entities/Post'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

async function UpdatePostService (postId: string, postUpdate: Post): Promise<HttpResponse> {
  const postsRepository = getRepository(Post)
  const postEntity = new Post()

  postEntity.title = postUpdate.title
  postEntity.content = postUpdate.content
  postEntity.status = postUpdate.status
  postEntity.tags = postUpdate.tags

  await postsRepository.update(postId, postEntity)

  const updatedPost = await postsRepository.findOne(postId).then(data => ({
    id: data.id,
    title: data.title,
    content: data.content,
    status: data.status,
    tags: data.tags,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    user: { id: data.user.id }
  }))

  return { statusCode: 200, statusMessage: updatedPost }
}

export default UpdatePostService
