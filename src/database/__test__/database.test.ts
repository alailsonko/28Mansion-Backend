/* eslint-disable jest/expect-expect */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import connection from '..'
import { getConnection, getRepository } from 'typeorm'
import User from '../entities/User'

beforeAll(async () => {
  await connection
})

afterAll(async () => {
  await getConnection().close()
})

beforeEach(async () => {
  await clear
})

describe('Database test', () => {
  test('should create a user', async () => {
    const usersRepository = getRepository(User)
    const user = usersRepository.create({
      username: 'valid_name',
      email: 'validddd@mail.com',
      password: 'valid_password'
    })

    const response = await usersRepository.save(user)
    console.log(response)
  })
})

const clear = async () => {
  const connection = getConnection()
  const entities = connection.entityMetadatas

  entities.forEach(async (entity) => {
    const repository = connection.getRepository(entity.name)
    await repository.query(`DELETE FROM ${entity.tableName}`)
  })
}
