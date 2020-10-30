import { Response, Request, RequestHandler } from 'express'
import { PostSchemeValidation, PostSchemeIsValid } from '../services/SchemeValidation/PostSchemeValidation'
import CreatePostService from '../services/CreatePostService'
import GetAllPostsOrderedByCreatedDateTimeService from '../services/GetAllPostsOrderedByCreatedDateTimeService'
import GetPostByIdService from '../services/GetPostByIdService'
import { IPostController } from '../protocols/Controllers.protocol'

let getPostByIdCache = null
class PostController implements IPostController {
  async GetAllPosts (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const { statusCode, statusMessage } = await GetAllPostsOrderedByCreatedDateTimeService()

    return res.status(statusCode).json(statusMessage)
  }

  async GetPostById (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const idParam = req.params.id
    if (getPostByIdCache && getPostByIdCache.id === idParam) {
      return res.status(200).json(getPostByIdCache)
    }
    const { statusCode, statusMessage } = await GetPostByIdService(idParam)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPostByIdCache = statusMessage
    return res.status(statusCode).json(statusMessage)
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
