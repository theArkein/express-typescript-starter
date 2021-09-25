import mongoose from 'mongoose'
import { config } from '../config/config'

const connect = async (): Promise<typeof mongoose> => {
  const connection = await mongoose.connect(config.db.uri)
  return connection
}

export const db = {
  connect
}
