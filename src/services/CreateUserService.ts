import validator from 'validator'
import { hash } from 'bcryptjs'
import { getRepository } from 'typeorm'
import User from '../database/entities/User'
import connection from '../database'

// interface AddAccount {
//   username: string
//   email: string
//   password: string
//   passwordConfirmation: string
// }

interface HttpRequest {
  body?: any
}

interface HttpResponse {
  statusCode: number
  statusMessage: string | any
}

interface CreateUserServiceDTO {
  execute: (_: HttpRequest) => Promise<HttpResponse>
}

class CreateUserService implements CreateUserServiceDTO {
  async execute (req: HttpRequest): Promise<HttpResponse> {
    try {
      await connection
      const usersRepository = getRepository(User)

      const checkUserExists = await usersRepository.findOne({
        where: { email: req.body.email }
      })

      if (checkUserExists) {
        return {
          statusCode: 400,
          statusMessage: 'User already exists'
        }
      }

      const requiredFields = ['username', 'email', 'password', 'passwordConfirmation']

      for (const field of requiredFields) {
        if (!req.body[field]) {
          return {
            statusCode: 400,
            statusMessage: `missing parameter ${field}`
          }
        }
      }

      if (req.body.password !== req.body.passwordConfirmation) {
        return {
          statusCode: 400,
          statusMessage: 'password and confirmation must be the same'
        }
      }

      const checkIsEmail = validator.isEmail(req.body.email)
      if (!checkIsEmail) {
        return {
          statusCode: 400,
          statusMessage: 'email invalid'
        }
      }
      const hashedPassword = await hash(req.body.password, 8)

      const user = usersRepository.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      })

      await usersRepository.save(user)

      // console.log(user)
      return {
        statusCode: 200,
        statusMessage: {
          user
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        statusMessage: error
      }
    }
  }
}

export default CreateUserService
