import { Response, Request, RequestHandler } from 'express'
import { PostSchemeValidation, PostSchemeIsValid } from '../services/SchemeValidation/PostSchemeValidation'
import CreatePostService from '../services/CreatePostService'
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
    const reqData = req.body
    const { statusCode, statusMessage } = await PostSchemeValidation(reqData)
    const isValid = await PostSchemeIsValid(statusMessage)
    if (isValid) {
      const { statusCode, statusMessage } = await CreatePostService(reqData)
      return res.status(statusCode).json(statusMessage)
    }
    console.log(statusMessage)
    return res.status(statusCode).json(statusMessage)
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
