module.exports = {
  type: `${process.env.POSTGRES_TYPE}`,
  host: `${process.env.POSTGRES_HOST}`,
  port: `${process.env.POSTGRES_PORT}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  username: `${process.env.POSTGRES_USERNAME}`,
  database: `${process.env.POSTGRES_DATABASE}`,
  entities: [
    './src/database/entities/*.ts'
  ],
  migrations: [
    './src/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/database/entities'
  }
}
