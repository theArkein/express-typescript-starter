import express from 'express'
import morgan from 'morgan'
import { routes } from './routes/routes'
import { log } from './helpers/helpers'
import { db } from './db/db'
import { Error } from './types/types'
import { config } from './config/config'

const app = express()

db.connect().then(() => {
  log.success('Databse connection success')
}).catch((err: Error) => {
  log.fail(`${err.name} ${err.message}`)
  process.exit(10)
})

app.use(morgan(config.morgan.format))
app.use(routes)

app.listen(config.port, () => {
  log.info('\nApp started')
  log.success(`Listening to port: ${config.port as string}`)
})
