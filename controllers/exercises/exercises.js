import { EXERCISE_ERROR_MESSAGE, IS_NOT_SUCCESSFUL, NO_RESPONSE_FROM_SERVER } from '../../consts/exercises.js'
import { validateExercise } from '../../schemas/zod/exercise.js'

export class ExerciseController {
  constructor ({ exerciseModel }) {
    this.exerciseModel = exerciseModel
  }

  create = async (req, res) => {
    const input = { ...req.body }

    const { date } = req.body
    if (!date) input.date = new Date().toDateString()

    const safeExercise = validateExercise(input)

    if (safeExercise.error) {
      const response = {
        response: NO_RESPONSE_FROM_SERVER,
        message: safeExercise.error,
        ok: IS_NOT_SUCCESSFUL
      }

      return res.status(400).json(response)
    }

    const safeExerciseDate = new Date(safeExercise.data.date).toDateString()

    if (safeExerciseDate === 'Invalid Date') {
      const response = {
        response: NO_RESPONSE_FROM_SERVER,
        message: EXERCISE_ERROR_MESSAGE.ERR_INVALID_DATE,
        ok: IS_NOT_SUCCESSFUL
      }

      return res.status(400).json(response)
    }

    const { id: userId } = req.params

    const newExercise = await this.exerciseModel.create({ userId, input: { ...safeExercise.data, date: safeExerciseDate } })

    if (!newExercise.ok) return res.status(500).json(newExercise)

    // Response based on DB
    const { response } = newExercise
    return res.status(201).json(response)
  }
}
