/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response, Request, RequestHandler } from 'express'
import { IUserController } from '../protocols/Controllers.protocol'

class UserController implements IUserController {
  async UploadPic (req: Request, res: Response): Promise<Response<RequestHandler>> {
    return res.status(200).json({ ok: 'funfando' })
  }
}

export default UserController
