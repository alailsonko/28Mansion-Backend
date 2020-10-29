import { AddPost } from '../usecases/AddPost'
import User from '../entities/User'
import Post from '../entities/Post'
import { getRepository } from 'typeorm'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

async function CreatePostService (addPost: AddPost): Promise<HttpResponse> {
  const usersRepository = getRepository(User)
  const postsRepository = getRepository(Post)

  const IdIsValid = await usersRepository.findOne({
    where: { id: addPost.user.id }
  }).then((data) => data.id).catch(() => false)

  if (!IdIsValid) {
    return { statusCode: 400, statusMessage: 'User does not exist' }
  }

  console.log(IdIsValid)
  await postsRepository.save(addPost)

  return { statusCode: 200, statusMessage: 'post created successfully' }
}

export default CreatePostService
