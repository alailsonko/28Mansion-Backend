import { Router } from 'express'
import UserController from '../controllers/UserController'
import ensureAuthentication from '../middlewares/ensureAuthentication'
// import ownerAuthorization from '../middlewares/ownerAuthorization'

const makeUserController = new UserController()

const usersRouter = Router()

usersRouter.use('/:user', ensureAuthentication)

// post
usersRouter.post('/:user/profile', makeUserController.UploadPic)

export default usersRouter
