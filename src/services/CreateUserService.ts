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
      const { username } = req.body as AddAccount

      if (!req.body.username) {
        return {
          statusCode: 400,
          statusMessage: `missing parameter ${username}`
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
