/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '../config/auth'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ownerAuthorization (
  req: Request,
  res: Response,
  next: NextFunction
): HttpResponse | void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(403).json('JWT token is missing')
  }

  const [, token] = authHeader.split(' ')
  try {
    const decoded = verify(token, authConfig.jwt.secret)

    const { sub } = decoded as TokenPayload

    if (req.body.user.id !== sub) {
      return res.status(403).json('Not authorized')
    }

    return next()
  } catch (err) {
    return res.status(403).json('Invalid JWT token')
  }
}
