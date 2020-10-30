import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '../../swagger.json'
import { Router } from 'express'

const swaggerRoutes = Router()

swaggerRoutes.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default swaggerRoutes
