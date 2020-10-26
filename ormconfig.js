const entities = process.env.NODE_ENV === 'development' ? ['./dist/database/entities/*.js'] : ['./src/database/entities/*.ts']
const migrations = process.env.NODE_ENV === 'development' ? ['./dist/database/migrations/*.js'] : ['./src/database/migrations/*.ts']

module.exports = {
  type: `${process.env.POSTGRES_TYPE}`,
  host: `${process.env.POSTGRES_HOST}`,
  port: `${process.env.POSTGRES_PORT}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  username: `${process.env.POSTGRES_USERNAME}`,
  database: `${process.env.POSTGRES_DATABASE}`,
  entities: entities,
  migrations: migrations,
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/database/entities'
  }
}
