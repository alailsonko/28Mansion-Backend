import { getRepository } from 'typeorm'
import Post from '../entities/Post'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

async function DeletePostService (idParam: string): Promise<HttpResponse> {
  const postsRepository = getRepository(Post)
  console.log(idParam)
  const { statusCode, statusMessage } = await postsRepository.delete(idParam)
    .then(data => {
      switch (data.affected) {
        case 0: {
          return { statusCode: 400, statusMessage: 'post not found' }
        }
        case 1: {
          return { statusCode: 200, statusMessage: `post deleted ${idParam}` }
        }
      }
    })

  return { statusCode: statusCode, statusMessage: statusMessage }
}

export default DeletePostService
