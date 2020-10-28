import { LoginUserSchemeValidation, LoginUserSchemeIsValid } from '../LoginUserSchemeValidation'
import { LoginUser } from '../../usecases/LoginUser'

describe('LoginUserSchemeValidation', () => {
  test('should return error case email is invalid', async () => {
    const login: LoginUser = {
      email: 'invalid @mail.com',
      password: 'valid_password'
    }
    const response = await LoginUserSchemeValidation(login)

    expect(response.statusCode).toBe(400)
  })
  test('should return error case email is not provided', async () => {
    const login: LoginUser = {
      email: '',
      password: 'valid_password'
    }
    const response = await LoginUserSchemeValidation(login)

    expect(response.statusCode).toBe(400)
  })
  test('should return error case password is not provided', async () => {
    const login: LoginUser = {
      email: 'valid_@mail.com',
      password: ''
    }
    const response = await LoginUserSchemeValidation(login)

    expect(response.statusCode).toBe(400)
  })
})

describe('LoginUserSchemeIsValid', () => {
  test('should return false case LoginUser is invalid', async () => {
    const login: LoginUser = {
      email: 'invalid @mail.com',
      password: 'valid_password'
    }
    const response = await LoginUserSchemeIsValid(login)

    expect(response).toBeFalsy()
  })
  test('should return true case LoginUser is valid', async () => {
    const login: LoginUser = {
      email: 'valid@mail.com',
      password: 'valid_password'
    }
    const response = await LoginUserSchemeIsValid(login)

    expect(response).toBeTruthy()
  })
})
