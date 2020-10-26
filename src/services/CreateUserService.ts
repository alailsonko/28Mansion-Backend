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
  statusMessage: string
}

class CreateUserService {
  execute (req: HttpRequest): HttpResponse {
    try {
      // const { username, email, password, passwordConfirmation } = req.body as AddAccount

      const requiredFields = ['username', 'email', 'password', 'passwordConfirmation']

      for (const field of requiredFields) {
        if (!req.body[field]) {
          return {
            statusCode: 400,
            statusMessage: `missing parameter ${field}`
          }
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
