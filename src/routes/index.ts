import { Router } from 'express'
import authRouter from './auth.routes'
import usersRouter from './users.routes'
import postsRouter from './posts.routes'
import swaggerRouter from './swagger.routes'

const routes = Router()

const routesHanlder = [authRouter, swaggerRouter, postsRouter, usersRouter]

for (const rt of routesHanlder) {
  routes.use('/api/v1/', rt)
}

export default routes
