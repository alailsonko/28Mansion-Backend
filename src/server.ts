import 'reflect-metadata'
import dotenv from 'dotenv'

import express from 'express'
import 'express-async-errors'
import routes from './routes'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3334

app.use(express.json())
app.use(routes)

const server = app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})

export default server
