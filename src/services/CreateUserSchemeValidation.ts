import * as Yup from 'yup'
import { AddAccount } from '../usecases/AddAccount'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

const scheme = Yup.object().shape({
  username: Yup.string().strict(true).matches(/^[a-zA-Z0-9]*$/, 'must contain just letters and number').trim('must not contain whitespace').required('username is required'),
  email: Yup.string().email('must be a valid email').required('email is required'),
  password: Yup.string().min(8, 'must be longer than 8 characters').required('Password is required'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Password is required')
})

async function CreateUserSchemeValidation (addAccount: AddAccount): Promise<HttpResponse> {
  return await scheme.validate(addAccount).then(data => ({ statusCode: 200, statusMessage: data })).catch(err => ({ statusCode: 400, statusMessage: err.message }))
}
async function CreateUserSchemeIsValid (addAccount: AddAccount): Promise<HttpResponse | boolean> {
  return await scheme.isValid(addAccount).then(data => data).catch(err => ({ statusCode: 400, statusMessage: err.message }))
}

export { CreateUserSchemeValidation, CreateUserSchemeIsValid }
