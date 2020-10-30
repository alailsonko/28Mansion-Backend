import { getRepository } from 'typeorm'
import Post from '../entities/Post'
import { compareAsc } from 'date-fns'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

async function GetAllPostsOrderedByCreatedDateTime (): Promise<HttpResponse> {
  const postsRepository = await getRepository(Post).find()
  if (postsRepository.length === 0) {
    return { statusCode: 200, statusMessage: 'No posts created' }
  }
  const sortedPosts = postsRepository.slice().sort((a, b) => compareAsc(b.createdAt, a.createdAt)).map((item) => {
    return {
      id: item.id,
      title: item.title,
      content: item.content,
      status: item.status,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      user: {
        id: item.user.id,
        profile: item.user.profile,
        username: item.user.username
      }

    }
  }
  )

  return { statusCode: 200, statusMessage: sortedPosts }
}

export default GetAllPostsOrderedByCreatedDateTime
