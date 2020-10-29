import * as Yup from 'yup'
import { AddPost } from '../../usecases/AddPost'

interface HttpResponse {
  statusCode: number
  statusMessage: any
}

const scheme = Yup.object().shape({
  title: Yup.string().min(10, 'minimum of 10 characters.').max(255, 'maximum of 255 characters').required('title is required'),
  content: Yup.string().min(10, 'minimum of 10 characters.').max(1000, 'maximum of 1000 characters').required('content is required'),
  tags: Yup.array().of(Yup.string().matches(/^[a-zA-Z0-9]*$/, 'tags must contain just letters and number').trim('must not contain whitespace')),
  status: Yup.string().oneOf(['public', 'private', 'outdated']).required('status must be specified'),
  user: Yup.object({
    id: Yup.string().required('specify the user id')
  }).required('specify the user id')
})

async function PostSchemeValidation (addPost: AddPost): Promise<HttpResponse> {
  return await scheme.validate(addPost).then(data => ({ statusCode: 200, statusMessage: data })).catch(err => ({ statusCode: 400, statusMessage: err.message }))
}
async function PostSchemeIsValid (addPost: AddPost): Promise<HttpResponse | boolean> {
  return await scheme.isValid(addPost).then(data => data).catch(err => ({ statusCode: 400, statusMessage: err.message }))
}

export { PostSchemeValidation, PostSchemeIsValid }
