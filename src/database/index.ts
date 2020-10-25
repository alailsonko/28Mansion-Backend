import { Connection, createConnection } from 'typeorm'

const connection = createConnection()
  .then((connection: Connection) => {
    console.info('created connection', connection.isConnected)
  })
  .catch(err => {
    console.error('error', err)
  })

export default connection
