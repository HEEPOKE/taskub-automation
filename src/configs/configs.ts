import * as dotenv from 'dotenv'

dotenv.config()

const { BASE_URL } = process.env

const configs = {
  BASE_URL,
}

export default configs