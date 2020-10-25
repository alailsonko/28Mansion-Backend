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
    const response = await request.get('/signup')
    expect(response.status).toBe(200)
    done()
  })
})
