import supertest from 'supertest'
import server from '../../server'

const request = supertest(server)

beforeEach(async () => {
  try {
    Promise.resolve(server.close())
  } catch (error) {
    console.log(error)
  }
})

afterAll(async () => {
  try {
    Promise.resolve(server.close())
  } catch (error) {
    console.log(error)
  }
})

describe('Test route /signup', () => {
  test('should return successful case route is working', async (done) => {
    const data = {
      username: 'valid_username',
      email: 'valid_mail@mail.com',
      password: 'valid_password',
      passwordConfirmation: 'valid_password'
    }

    const response = await request.post('/signup').send(data)
      .set('Accept', 'application/json')

    console.log(response)
    expect(response.status).toBe(200)
    done()
  })
})
