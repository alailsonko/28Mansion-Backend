import 'reflect-metadata'

import express from 'express'
import 'express-async-errors'

import routes from './routes'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(routes)

const server = app.listen(PORT, () => {
  console.log('Server started on port 3333')
})

export default server
