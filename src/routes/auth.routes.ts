import { Router } from 'express'
import AuthController from '../controllers/AuthController'

const makeAuthController = new AuthController()

const authRouter = Router()

authRouter.post('/signup', makeAuthController.SignUp)
authRouter.post('/signin', makeAuthController.SignIn)

export default authRouter
