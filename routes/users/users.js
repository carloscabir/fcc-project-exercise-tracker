import { Router } from "express"
import { UserController } from "../../controllers/users/users.js"
import { ExerciseController } from "../../controllers/exercises/exercises.js"

export const createUsersRouter = ({ models }) => {
  const usersRouter = Router()

  const { userModel, exerciseModel } = models

  const usersController = new UserController({ userModel }) 
  const exercisesController = new ExerciseController({ exerciseModel })

  // Add POST action to userContrller class
  usersRouter.post('/', usersController.addUser)
  
  usersRouter.get('/:id/log', usersController.getUserLogs)

  usersRouter.post('/:id/exercises', exercisesController.addExercise)

  return usersRouter
 }