export default {
  jwt: {
    secret: `${process.env.JSONWEBTOKEN_SECRET}`,
    expiresIn: `${process.env.JSONWEBTOKEN_EXPIRESIN}`
  }
}
