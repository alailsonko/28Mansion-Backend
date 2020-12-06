/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { Request, Response, NextFunction } from 'express'

import { getRepository } from 'typeorm'
import Post from '../entities/Post'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

export default async function ownerAuthorization (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<HttpResponse | void> {
  try {
    const postsRepository = getRepository(Post)
    console.log('here is coming')
    const findPost = await postsRepository.findOne({ id: req.params.id })

    if (req.body.user.id !== findPost.user.id) {
      return res.status(403).json('Not allowed from middleware')
    }

    return next()
  } catch (err) {
    return res.status(403).json('Invalid JWT token')
  }
}
