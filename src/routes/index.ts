import { Router, Request, Response, NextFunction } from 'express'

const routes = Router()

routes.use('/signup', (req: Request, res: Response, _: NextFunction) => {
  const resData = req.body
  console.log(resData)
  return res.status(200).json(resData)
})

export default routes
