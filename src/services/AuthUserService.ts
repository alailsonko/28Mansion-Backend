import { compare } from 'bcryptjs'
import { getRepository } from 'typeorm'
import User from '../entities/User'
import { LoginUser } from '../usecases/LoginUser'
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

async function CreateUserService (data: LoginUser): Promise<HttpResponse> {
  const usersRepository = getRepository(User)

  const user = await usersRepository.findOne({
    where: { email: data.email }
  })

  if (!user) {
    return { statusCode: 400, statusMessage: 'Incorrect email/password combination' }
  }
  const passwordMatched = await compare(data.password, user.password)

  if (!passwordMatched) {
    return { statusCode: 400, statusMessage: 'Incorrect email/password combination' }
  }

  const { secret, expiresIn } = authConfig.jwt
  const token = sign({}, secret, {
    subject: user.id,
    expiresIn
  })

  delete user.password

  return { statusCode: 200, statusMessage: { user, token } }
}

export default CreateUserService
