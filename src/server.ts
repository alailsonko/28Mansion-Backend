import { createConnection } from 'typeorm'
import * as bodyParser from 'body-parser'
import 'reflect-metadata'
import dotenv from 'dotenv'

import express from 'express'
import 'express-async-errors'
import process from 'process'
import routes from './routes'

// Connects to the Database -> then starts the express
createConnection()
  .then(async connection => {
    // Create a new express application instance
    const app = express()
    dotenv.config()
    // Call midlewares
    app.use(bodyParser.json())
    app.use(routes)
    console.info('connected ', connection.isConnected)
    // Set all routes from routes folder
    app.use('/signup', (req, res) => {
      return res.status(200).json(req.body)
    })

    app.listen(process.env.PORT, () => {
      console.log(`Server is running is port ${process.env.PORT}`)
    })
  })
  .catch(error => console.log(error))
