import { Router, Request, Response, NextFunction } from 'express'

const routes = Router()

routes.use('/signup', (req: Request, res: Response, _: NextFunction) => {
  return res.status(200).json({ msg: 'working' })
})

export default routes
