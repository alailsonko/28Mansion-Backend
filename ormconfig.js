/* eslint-disable no-unused-vars */
const entitiesDir = './src/entities'
const entities = ['./src/entities/*.ts']
const migrationsDir = './src/migrations'
const migrations = ['./src/migrations/*.ts']

const entitiesDirLocalProd = './dist/src/entities'
const entitiesLocalProd = ['./dist/src/entities/*.js']
const migrationsDirLocalProd = './dist/src/migrations'
const migrationsLocalProd = ['./dist/src/migrations/*.js']

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // host: process.env.POSTGRES_HOST,
  // port: process.env.POSTGRES_PORT,
  // username: process.env.POSTGRES_USERNAME,
  // password: process.env.POSTGRES_PASSWORD,
  // database: process.env.POSTGRES_DATABASE,
  extra: {
    ssl: true
  },

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
