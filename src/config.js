import env from 'dotenv'

env.config()

export const PORT = process.env.PORT || 8000

export const JWTSECRET = process.env.JWTSECRET