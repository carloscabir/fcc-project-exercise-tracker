import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import path from 'path'
import logger from 'morgan'

import { createApiRouter } from './routes/api/api.v1.js'
import { dbClient } from './utils/dbClient.js'

const __dirname = path.resolve()

export const createApp = ({ models }) => {
  const app = express()

  app.use(express.static('public'))
  app.use(express.urlencoded({ extended: false }))
  app.disable('x-powered-by')
  app.use(json())
  app.use(corsMiddleware())
  app.use(logger('dev'))

  dbClient()

  app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

  app.use('/api', createApiRouter({ models }))

  app.all('*', (req, res) => {
    return res.status(404).json({
      api: 'v1.0.0',
      error: '404: Not found',
      message: 'Please visit documentation or other endpoint'
    })
  })

  const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })
}
