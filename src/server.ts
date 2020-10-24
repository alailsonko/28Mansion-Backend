import 'reflect-metadata'

import express from 'express'
import 'express-async-errors'

const app = express()

app.listen(3333, () => {
  console.log('Server started on port 3333')
})
