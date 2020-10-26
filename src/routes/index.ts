import { Router } from 'express'
import SignUpController from '../controllers/SignUpController'

const routes = Router()
const makeSignUpController = new SignUpController()

routes.post('/signup', async (req, res) => {
  // console.log(req)
  const response = await makeSignUpController.execute(req)
  // console.log(response)
  res.status(response.statusCode).json(response.statusMessage)
})

export default routes
