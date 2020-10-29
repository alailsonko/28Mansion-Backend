export default {
  jwt: {
    secret: `${process.env.JSONWEBTOKEN_SECRET}`,
    expiresIn: '1d'
  }
}
