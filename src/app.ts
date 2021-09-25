import express from 'express'
import dotenv from 'dotenv'
import { routes } from './routes/routes'
import { log } from './helpers/helpers'

const app = express()
dotenv.config()

app.use(routes)

app.listen(process.env.PORT, () => {
  log.success(`Listening to port: ${process.env.PORT as string}`)
})
