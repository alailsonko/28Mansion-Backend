interface AddAccount {
  username: string
  email: string
  password: string
  passwordConfirmation: string
}

interface HttpRequest {
  body?: any
}

interface HttpResponse {
  statusCode: number
  statusMessage: string
}

class CreateUserService {
  execute (req: HttpRequest): HttpResponse {
    try {
      const { username, email, password, passwordConfirmation } = req.body as AddAccount

      if (!req.body.username) {
        return {
          statusCode: 400,
          statusMessage: `missing parameter ${username}`
        }
      }
      if (!req.body.email) {
        return {
          statusCode: 400,
          statusMessage: `missing parameter ${email}`
        }
      }
      if (!req.body.password) {
        return {
          statusCode: 400,
          statusMessage: `missing parameter ${password}`
        }
      }
      if (!req.body.passwordConfirmation) {
        return {
          statusCode: 400,
          statusMessage: `missing parameter ${passwordConfirmation}`
        }
      }

      console.log({ msg: 'ok' })
      return
    } catch (error) {
      console.log(error)
    }
  }
}

export default CreateUserService
