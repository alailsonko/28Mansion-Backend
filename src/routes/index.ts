import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

const routes = Router()
const createUserService = new CreateUserService()

routes.post('/signup', async (req, res) => {
  // console.log(req)
  const response = await createUserService.execute(req)
  // console.log(response)
  res.status(response.statusCode).json(response.statusMessage)
})

export default routes
