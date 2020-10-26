import CreateUserService from '../CreateUserService'
import { getConnection } from 'typeorm'
import User from '../../database/entities/User'

/* eslint-disable jest/expect-expect */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import connection from '../../database/index'

let id = null
console.log(id)
beforeAll(async () => {
  await connection
})

afterAll(async () => {
  await getConnection().close()
})

afterAll(async () => {
  console.log(id)
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('id = :id', { id: id })
    .execute()
})

describe('CreateUserService', () => {
  test('should return 400 if username is missing', async () => {
    const sut = new CreateUserService()

    const response = await sut.execute({
      body: {
        username: '',
        email: 'valid_email@mail.com',
        password: 'valid_password',
        passwordConfirmation: 'valid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if email is missing', async () => {
    const sut = new CreateUserService()

    const response = await sut.execute({
      body: {
        username: 'valid_username',
        email: '',
        password: 'valid_password',
        passwordConfirmation: 'valid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if password is missing', async () => {
    const sut = new CreateUserService()

    const response = await sut.execute({
      body: {
        username: 'valid_username',
        email: 'valid_email@mail.com',
        password: '',
        passwordConfirmation: 'valid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if passwordConfirmation is missing', async () => {
    const sut = new CreateUserService()

    const response = await sut.execute({
      body: {
        username: 'valid_username',
        email: 'valid_email@mail.com',
        password: 'valid_password',
        passwordConfirmation: ''
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if password does not match is missing', async () => {
    const sut = new CreateUserService()

    const response = await sut.execute({
      body: {
        username: 'valid_username',
        email: 'valid_email@mail.com',
        password: 'valid_password',
        passwordConfirmation: 'invalid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 400 if email is invaid', async () => {
    const sut = new CreateUserService()

    const response = await sut.execute({
      body: {
        username: 'valid_username',
        email: 'invalid_email @mail.com',
        password: 'valid_password',
        passwordConfirmation: 'valid_password'
      }
    })

    expect(response.statusCode).toBe(400)
  })
  test('should return 200 should create user is fit requeriments', async () => {
    const sut = new CreateUserService()

    const response = await sut.execute({
      body: {
        username: 'valid_username',
        email: 'valid_email@mail.com',
        password: 'valid_password',
        passwordConfirmation: 'valid_password'
      }
    })

    id = response.statusMessage.user.id
    console.log(response.statusMessage)

    expect(response.statusCode).toBe(200)
  })
})
