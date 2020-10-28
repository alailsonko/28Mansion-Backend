import * as Yup from 'yup'
import { LoginUser } from '../usecases/LoginUser'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

const scheme = Yup.object().shape({
  email: Yup.string().email('must be a valid email').required('email is required'),
  password: Yup.string().required('Password is required')
})

async function LoginUserSchemeValidation (loginUser: LoginUser): Promise<HttpResponse> {
  return await scheme.validate(loginUser).then(data => ({ statusCode: 200, statusMessage: data })).catch(err => ({ statusCode: 400, statusMessage: err.message }))
}
async function LoginUserSchemeIsValid (loginUser: LoginUser): Promise<HttpResponse | boolean> {
  return await scheme.isValid(loginUser).then(data => data).catch(err => ({ statusCode: 400, statusMessage: err.message }))
}

export { LoginUserSchemeValidation, LoginUserSchemeIsValid }
