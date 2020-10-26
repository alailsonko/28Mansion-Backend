const entities = process.env.NODE_ENV === 'development' ? ['./dist/database/entities/*.js'] : ['./src/database/entities/*.ts']
const migrations = process.env.NODE_ENV === 'development' ? ['./dist/database/migrations/*.js'] : ['./src/database/migrations/*.ts']
const migrationsDir = process.env.NODE_ENV === 'development' ? './dist/database/migrations/' : './src/database/migrations'
const entitiesDir = process.env.NODE_ENV === 'development' ? './dist/database/entities' : './src/database/entities'

module.exports = {
  name: 'default',
  type: `${process.env.POSTGRES_TYPE}`,
  host: `${process.env.POSTGRES_HOST}`,
  port: `${process.env.POSTGRES_PORT}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  username: `${process.env.POSTGRES_USERNAME}`,
  database: `${process.env.POSTGRES_DATABASE}`,
  entities: entities,
  migrations: migrations,
  cli: {
    migrationsDir: migrationsDir,
    entitiesDir: entitiesDir
  }
}
