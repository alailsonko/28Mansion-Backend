import { Response, Request } from 'express'

export interface Controller {
  SignUp: (req: Request, res: Response) => Promise<Response>
  SignIn: (req: Request, res: Response) => Promise<Response>
}
