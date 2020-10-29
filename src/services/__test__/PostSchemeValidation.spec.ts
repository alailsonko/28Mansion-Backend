import { PostSchemeIsValid, PostSchemeValidation } from '../SchemeValidation/PostSchemeValidation'
import { AddPost } from '../../usecases/AddPost'
import { PostStatus } from '../../entities/Post'

describe('CreateUserSchemeValidation', () => {
  test('should return an error case title is less than 10 caracteres', async () => {
    const sut = PostSchemeValidation
    const post: AddPost = {
      title: 'invalid',
      content: 'some valid content',
      tags: ['tag1', 'tag2'],
      status: PostStatus.PUBLIC,
      user: { id: 'valid_id' }
    }
    const response = await sut(post)
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe('minimum of 10 characters.')
  })
  test('should return an error case content is less than 10 caracteres', async () => {
    const sut = PostSchemeValidation
    const user: AddPost = {
      title: 'some valid title',
      content: 'invalid',
      tags: ['tag1', 'tag2'],
      status: PostStatus.PUBLIC,
      user: { id: 'valid_id' }
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe('minimum of 10 characters.')
  })
  test('should return an error case title is loger than 255 caracteres', async () => {
    const sut = PostSchemeValidation
    const user: AddPost = {
      title: `some valid title more longer than 255 random title for make test fail
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      `,
      content: 'valid content some valid content',
      tags: ['tag1', 'tag2'],
      status: PostStatus.PUBLIC,
      user: { id: 'valid_id' }
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe('maximum of 255 characters')
  })
  test('should return an error case content is loger than 1000 caracteres', async () => {
    const sut = PostSchemeValidation
    const user: AddPost = {
      title: `some valid title more longer than 255 random title for make test fail
      some valid title more longer than 255 random title for
      `,
      content: `
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for

      `,
      tags: ['tag1', 'tag2'],
      status: PostStatus.PUBLIC,
      user: { id: 'valid_id' }
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe('maximum of 1000 characters')
  })
  test('should return an error case tags does not follow rules', async () => {
    const sut = PostSchemeValidation
    const user: AddPost = {
      title: `some valid title more longer than 255 random title for make test fail
      some valid title more longer than 255 random title for
      `,
      content: `
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for



      `,
      tags: ['tag1', 'tag2_'],
      status: PostStatus.PUBLIC,
      user: { id: 'valid_id' }
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe('tags must contain just letters and number')
  })
  test('should return an error case no valid status iP ostStaPostStatus.PUBLICprovided', async () => {
    const sut = PostSchemeValidation
    const user: AddPost = {
      title: `some valid title more longer than 255 random title for make test fail
      some valid title more longer than 255 random title for
      `,
      content: `
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for



      `,
      tags: ['tag1', 'tag2'],
      status: PostStatus.UNKNOW,
      user: { id: 'valid_id' }
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe('status must be one of the following values: public, private, outdated')
  })

  test('should return an error case user is not provided', async () => {
    const sut = PostSchemeValidation
    const user: AddPost = {
      title: `some valid title more longer than 255 random title for make test fail
      some valid title more longer than 255 random title for
      `,
      content: `
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for



      `,
      tags: ['tag1', 'tag2'],
      status: PostStatus.PUBLIC,
      user: {}
    }
    const response = await sut(user)
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe('specify the user id')
  })
  test('should return the post if follows rules', async () => {
    const sut = PostSchemeIsValid
    const post: AddPost = {
      title: `some valid title more longer than 255 random title for make test fail
      some valid title more longer than 255 random title for
      `,
      content: `
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      some valid title more longer than 255 random title for
      `,
      tags: ['tag1', 'tag2'],
      status: PostStatus.PUBLIC,
      user: { id: 'valid_id' }
    }
    const response = await sut(post)
    console.log(response)
    expect(response).toBe(true)
  })
})
