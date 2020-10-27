import { Response, Request, RequestHandler } from 'express'
import { Controller } from '../protocols/Controller.protocol'
import { CreateUserSchemeValidation, CreateUserSchemeIsValid } from '../services/CreateUserSchemeValidation'
import CreateUserService from '../services/CreateUserService'

import { AddAccount } from '../usecases/AddAccount'

class UserController implements Controller {
  async SignUp (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const addAccount = req.body
    const { statusCode, statusMessage } = await CreateUserSchemeValidation(addAccount)
    const { username, email, password } = statusMessage as AddAccount
    const isValid = await CreateUserSchemeIsValid(statusMessage)

    if (isValid) {
      const { statusCode, statusMessage } = await CreateUserService({ username, email, password })

      return res.status(statusCode).json(statusMessage)
    }

    return res.status(statusCode).json(statusMessage)
  }

  async SignIn (req: Request, res: Response): Promise<Response<RequestHandler>> {
    return res.status(200).json(req.body)
  }
}

export default UserController
