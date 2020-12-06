import { Response, Request } from 'express'

export interface IAuthController {
  SignUp: (req: Request, res: Response) => Promise<Response>
  SignIn: (req: Request, res: Response) => Promise<Response>
}

export interface IPostController {
  GetAllPosts: (req: Request, res: Response) => Promise<Response>
  GetPostById: (req: Request, res: Response) => Promise<Response>
  CreateNewPost: (req: Request, res: Response) => Promise<Response>
  UpdatePost: (req: Request, res: Response) => Promise<Response>
  DeletePost: (req: Request, res: Response) => Promise<Response>
}

export interface IUserController {
  UploadPic: (req: Request, res: Response) => Promise<Response>
}
