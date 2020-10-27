import { Router } from 'express'
import UserController from '../controllers/UserController'

const makeUserController = new UserController()
const routes = Router()

routes.post('/signup', makeUserController.SignUp)
routes.post('/signin', makeUserController.SignIn)

export default routes
