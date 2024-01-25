import express, { json } from "express"
import { corsMiddleware } from "./middlewares/cors.js"
import path from 'path';
import logger from "morgan"
import dotenv from "dotenv/config"

import { createApiRouter } from "./routes/api/api.v1.js"

const __dirname = path.resolve();


export const createApp = ({ models }) => {
  const app = express()

  app.use(express.static('public'))
  app.use(express.urlencoded({ extended: false }))
  app.disable("x-powered-by")
  app.use(json())
  app.use(corsMiddleware())
  app.use(logger("dev"))

  
  app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

  app.use('/api/v1', (req, res) => createApiRouter({ models }))

  const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })
}