import { Response, Request, RequestHandler } from 'express'
import { IPostController } from '../protocols/Controllers.protocol'

class PostController implements IPostController {
  async GetAllPosts (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const data = req.body
    console.log(data)
    return res.status(200).json({ msg: 'ok from GetAllPosts' })
  }

  async GetPostById (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const data = req.body
    console.log(data)
    return res.status(200).json({ msg: 'ok from GetPostById' })
  }

  async CreateNewPost (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const data = req.body
    console.log(data)
    return res.status(200).json({ msg: 'ok CreateNewPost' })
  }

  async UpdatePost (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const data = req.body
    console.log(data)
    return res.status(200).json({ msg: 'ok UpdatePost' })
  }

  async DeletePost (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const data = req.body
    console.log(data)
    return res.status(200).json({ msg: 'ok DeletePost' })
  }
}

export default PostController
