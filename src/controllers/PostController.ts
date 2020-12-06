import { Response, Request, RequestHandler } from 'express'
import { PostSchemeValidation, PostSchemeIsValid } from '../services/SchemeValidation/PostSchemeValidation'
import CreatePostService from '../services/CreatePostService'
import GetAllPostsOrderedByCreatedDateTimeService from '../services/GetAllPostsOrderedByCreatedDateTimeService'
import GetPostByIdService from '../services/GetPostByIdService'
import UpdatePostService from '../services/UpdatePostService'
import DeletePostService from '../services/DeletePostService'
import { IPostController } from '../protocols/Controllers.protocol'

let getPostByIdCache = null
let getAllPostCache = null
class PostController implements IPostController {
  async GetAllPosts (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const user = req.body
    console.log(user)
    console.log(user)
    console.log(user)
    if (getAllPostCache) {
      return res.status(200).json(getAllPostCache)
    }

    const { statusCode, statusMessage } = await GetAllPostsOrderedByCreatedDateTimeService()
    getAllPostCache = statusMessage
    return res.status(statusCode).json(statusMessage)
  }

  async GetPostById (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const user = req.body
    console.log(user)
    console.log(user)
    console.log(user)
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
      getAllPostCache = null
      return res.status(statusCode).json(statusMessage)
    }
    console.log(statusMessage)
    return res.status(statusCode).json(statusMessage)
  }

  async UpdatePost (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const user = req.body.user
    console.log(user)
    console.log(user)
    console.log(user)
    const postId = req.params.id
    const postUpdate = req.body
    const { statusCode, statusMessage } = await PostSchemeValidation(postUpdate)
    const isValid = await PostSchemeIsValid(statusMessage)
    if (isValid) {
      const { statusCode, statusMessage } = await UpdatePostService(postId, postUpdate)

      getAllPostCache = null
      return res.status(statusCode).json(statusMessage)
    }
    return res.status(statusCode).json(statusMessage)
  }

  async DeletePost (req: Request, res: Response): Promise<Response<RequestHandler>> {
    const idParam = req.params.id
    const { statusCode, statusMessage } = await DeletePostService(idParam)
    getAllPostCache = null
    return res.status(statusCode).json(statusMessage)
  }
}

export default PostController
