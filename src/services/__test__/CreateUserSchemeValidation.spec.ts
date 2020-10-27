import { CreateUserSchemeValidation } from '../CreateUserSchemeValidation'

describe('CreateUserSchemeValidation', () => {
  test('should return an error case username is invalid', async () => {
    const sut = CreateUserSchemeValidation
    const user = {
      username: 'valid_username',
      email: 'valid_email@mail.com',
      password: 'valid_password',
      passwordConfirm: 'valid_password'
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusMessage).toBe('must contain just letters and number')
  })
  test('should return an error case email is invalid', async () => {
    const sut = CreateUserSchemeValidation
    const user = {
      username: 'validusername',
      email: 'valid_ email@mail.com',
      password: 'valid_password',
      passwordConfirm: 'valid_password'
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusMessage).toBe('must be a valid email')
  })
  test('should return an error case password and passwordConfirm does not match', async () => {
    const sut = CreateUserSchemeValidation
    const user = {
      username: 'validusername',
      email: 'valid_email@mail.com',
      password: 'validpassword',
      passwordConfirm: 'valid_password'
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusMessage).toBe('Password must match')
  })
  test('should return an error case username is not provided', async () => {
    const sut = CreateUserSchemeValidation
    const user = {
      username: '',
      email: 'valid_email@mail.com',
      password: 'valid_password',
      passwordConfirm: 'valid_password'
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusMessage).toBe('username is required')
  })
  test('should return an error case email is not provided', async () => {
    const sut = CreateUserSchemeValidation
    const user = {
      username: 'validusername',
      email: '',
      password: 'valid_password',
      passwordConfirm: 'valid_password'
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusMessage).toBe('email is required')
  })
  test('should return an error case password is not longer than 8 characters', async () => {
    const sut = CreateUserSchemeValidation
    const user = {
      username: 'validusername',
      email: 'email_valid@mail.com',
      password: '1234567',
      passwordConfirm: '1234567'
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusMessage).toBe('must be longer than 8 characters')
  })
  test('should return user data case is successful', async () => {
    const sut = CreateUserSchemeValidation
    const user = {
      username: 'validusername',
      email: 'email_valid@mail.com',
      password: '12345678',
      passwordConfirm: '12345678'
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusMessage).toBe(user)
  })
})
