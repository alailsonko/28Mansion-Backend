/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response, Request, RequestHandler } from 'express'
import { IAuthController } from '../protocols/Controllers.protocol'
import { CreateUserSchemeValidation, CreateUserSchemeIsValid } from '../services/SchemeValidation/CreateUserSchemeValidation'
import { LoginUserSchemeValidation, LoginUserSchemeIsValid } from '../services/SchemeValidation/LoginUserSchemeValidation'
import CreateUserService from '../services/CreateUserService'
import AuthUserService from '../services/AuthUserService'

import { AddAccount } from '../usecases/AddAccount'
import { LoginUser } from '../usecases/LoginUser'

class AuthController implements IAuthController {
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
    const LoginUser = req.body
    const { statusCode, statusMessage } = await LoginUserSchemeValidation(LoginUser)
    const { email, password } = statusMessage as LoginUser
    const isValid = await LoginUserSchemeIsValid(statusMessage)

    if (isValid) {
      const { statusCode, statusMessage } = await AuthUserService({ email, password })
      return res.status(statusCode).json(statusMessage)
    }
    return res.status(statusCode).json(statusMessage)
  }
}

export default AuthController
