const entities = process.env.NODE_ENV === 'development' ? ['./dist/database/entities/*.js'] : ['./src/database/entities/*.js']
const migrations = process.env.NODE_ENV === 'development' ? ['./dist/database/migrations/*.js'] : ['./src/database/migrations/*.js']
const migrationsDir = process.env.NODE_ENV === 'development' ? './dist/database/migrations' : './src/database/migrations'
const entitiesDir = process.env.NODE_ENV === 'development' ? './dist/database/entities' : './src/database/entities'

module.exports = {
  url: process.env.NODE_ENV === 'development' ? process.env.POSTGRES_URI : null,
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
