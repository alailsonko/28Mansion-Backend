import validator from 'validator'
import { hash } from 'bcryptjs'
import { getRepository } from 'typeorm'
import User from '../database/entities/User'

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

class CreateUserService {
  async execute (req: HttpRequest): Promise<HttpResponse> {
    try {
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

      return {
        statusCode: 200,
        statusMessage: {
          user
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default CreateUserService
