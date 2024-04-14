import { Router } from 'express'
import { UserController } from '../../controllers/users/users.js'
import { ExerciseController } from '../../controllers/exercises/exercises.js'

export const createUsersRouter = ({ models }) => {
  const usersRouter = Router()

  const { userModel, exerciseModel } = models

  const usersController = new UserController({ userModel })
  const exercisesController = new ExerciseController({ exerciseModel })

  usersRouter.get('/', usersController.getAll)

  usersRouter.post('/', usersController.create)

  usersRouter.get('/:id/logs', usersController.getUserLogs)

  usersRouter.post('/:id/exercises', exercisesController.create)

  return usersRouter
}
