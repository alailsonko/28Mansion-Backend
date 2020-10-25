import { Connection, createConnection } from 'typeorm'

createConnection()
  .then((connection: Connection) => {
    console.info('created connection', connection.isConnected)
  })
  .catch(err => {
    console.error('error', err)
  })
