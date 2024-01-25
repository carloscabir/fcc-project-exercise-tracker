import { Router } from "express"
import { createUsersRouter } from "../users/users.js"

export const createApiRouter = ({ models }) => {
  const apiRouter = Router()
  
  apiRouter.get('/', (req, res) => { 
    return res.json({
      api: "v1.0.0",
      message: "Please visit documentation or other endpoint"
    })
  })

  apiRouter.use('users', createUsersRouter({ models }))

  return apiRouter
 }