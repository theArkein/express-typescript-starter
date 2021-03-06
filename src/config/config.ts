import dotenv from 'dotenv'

dotenv.config()

export const config = {
  port: process.env.PORT,
  db: {
    uri: process.env.DB_URI as string
  },
  morgan: {
    format: 'tiny'
  }
}
