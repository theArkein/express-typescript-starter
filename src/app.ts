import express from 'express'
import dotenv from 'dotenv'
import { routes } from './routes/routes'

const app = express()
dotenv.config()

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log('Listening to port: ', process.env.PORT)
})
