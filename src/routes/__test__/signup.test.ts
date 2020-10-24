import supertest from 'supertest'
import server from '../../server'

const request = supertest(server)

afterAll(async () => {
  Promise.resolve(server.close())
})

describe('Test route /signup', () => {
  test('should return successful case route is working', async (done) => {
    const response = await request.get('/signup')
    expect(response.status).toBe(200)
    done()
  })
})
