import { Router } from 'express'
import PostController from '../controllers/PostController'
import ensureAuthentication from '../middlewares/ensureAuthentication'
import ownerAuthorization from '../middlewares/ownerAuthorization'

const makePostController = new PostController()

const postsRouter = Router()

postsRouter.use('/posts', ensureAuthentication)

// get all posts
postsRouter.get('/posts', makePostController.GetAllPosts)
// get post by id
postsRouter.get('/posts/:id', makePostController.GetPostById)
// create a new post
postsRouter.post('/posts', makePostController.CreateNewPost)
// change the post
postsRouter.put('/posts/:id', ownerAuthorization, makePostController.UpdatePost)
// delete post
postsRouter.delete('/posts/:id', ownerAuthorization, makePostController.DeletePost)

export default postsRouter
