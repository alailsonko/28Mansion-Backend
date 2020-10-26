import CreateUserService from '../CreateUserService'

describe('CreateUserService', () => {
  test('should return 400 if username is missing', () => {
    const sut = new CreateUserService()

    const response = sut.execute({
      body: {
        username: '',
        email: 'valid_email@mail.com',
        password: 'valid_password',
        passwordConfirmation: 'valid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if email is missing', () => {
    const sut = new CreateUserService()

    const response = sut.execute({
      body: {
        username: 'valid_username',
        email: '',
        password: 'valid_password',
        passwordConfirmation: 'valid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if password is missing', () => {
    const sut = new CreateUserService()

    const response = sut.execute({
      body: {
        username: 'valid_username',
        email: 'valid_email@mail.com',
        password: '',
        passwordConfirmation: 'valid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if passwordConfirmation is missing', () => {
    const sut = new CreateUserService()

    const response = sut.execute({
      body: {
        username: 'valid_username',
        email: 'valid_email@mail.com',
        password: 'valid_password',
        passwordConfirmation: ''
      }
    })

    expect(response.statusCode).toBe(400)
  })
})
