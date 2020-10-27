/* eslint-disable no-unused-vars */
const entitiesDir = process.env.NODE_ENV === 'production' ? './dist/entities' : './src/entities'
const entities = process.env.NODE_ENV === 'production' ? ['./dist/entities/*.js,'] : ['./src/entities/*.ts']
const migrationsDir = process.env.NODE_ENV === 'production' ? './dist/migrations' : './src/migrations'
const migrations = process.env.NODE_ENV === 'production' ? ['./dist/migrations/*.js'] : ['./src/migrations/*.ts']

const entitiesDirLocalProd = './dist/entities'
const entitiesLocalProd = ['./dist/entities/*.js']
const migrationsDirLocalProd = './dist/migrations'
const migrationsLocalProd = ['./dist/migrations/*.js']

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,

  // // dev variables

  // migrations: migrations,
  // entities: entities,
  // cli: {
  //   entitiesDir: entitiesDir,
  //   migrationsDir: migrationsDir
  // }

  // local production variable
  migrations: migrationsLocalProd,
  entities: entitiesLocalProd,
  cli: {
    entitiesDir: entitiesDirLocalProd,
    migrationsDir: migrationsDirLocalProd
  }
}
