import { Response, Request } from 'express'

export interface IUserController {
  SignUp: (req: Request, res: Response) => Promise<Response>
  SignIn: (req: Request, res: Response) => Promise<Response>
}
