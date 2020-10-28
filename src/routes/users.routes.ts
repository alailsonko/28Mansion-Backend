import { Router } from 'express'
import UserController from '../controllers/UserController'

const makeUserController = new UserController()

const usersRouter = Router()

usersRouter.post('/signup', makeUserController.SignUp)
usersRouter.post('/signin', makeUserController.SignIn)

export default usersRouter
