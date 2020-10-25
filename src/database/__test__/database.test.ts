/* eslint-disable jest/expect-expect */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import connection from '..'
import { getConnection, getRepository } from 'typeorm'
import User from '../entities/User'

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

describe('Database test', () => {
  test('should create a user', async () => {
    const usersRepository = getRepository(User)
    const user = usersRepository.create({
      username: 'valid_name',
      email: 'valid@mail.com',
      password: 'valid_password'
    })

    const response = await usersRepository.save(user)
    id = response.id
    expect(response.username).toBe('valid_name')
  })
})
