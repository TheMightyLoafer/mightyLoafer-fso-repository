import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const apiUrl = process.env.REACT_APP_API_URL