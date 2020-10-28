import { hash } from 'bcryptjs'
import { getRepository } from 'typeorm'
import User from '../entities/User'

interface StoredData {
  username: string
  email: string
  password: string
}

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

async function CreateUserService (data: StoredData): Promise<HttpResponse> {
  const usersRepository = getRepository(User)

  const checkUserExists = await usersRepository.findOne({
    where: { email: data.email }
  })

  if (checkUserExists) {
    return { statusCode: 400, statusMessage: 'User already exists' }
  }
  const passwordHashed = await hash(data.password, 8)
  const targetData = Object.assign(data, { password: passwordHashed })
  await usersRepository.save(targetData)
  return { statusCode: 200, statusMessage: 'user created successfully' }
}

export default CreateUserService
