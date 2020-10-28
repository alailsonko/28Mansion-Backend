import { Router } from 'express'
import usersRouter from './users.routes'
import postsRouter from './posts.routes'

const routes = Router()

routes.use('', usersRouter)
routes.use('', postsRouter)

export default routes
