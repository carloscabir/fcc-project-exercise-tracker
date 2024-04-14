import mongoose from 'mongoose'
import { USER_SCHEMA } from '../../../schemas/mongodb/user.js'
import { EXERCISE_ERROR_MESSAGE, EXERCISE_SUCCESS_MESSAGE, IS_NOT_SUCCESSFUL, IS_SUCCESSFUL, NO_RESPONSE_FROM_SERVER } from '../../../consts/exercises.js'

const MongoUserModel = mongoose.model('User', USER_SCHEMA)

export class ExerciseModel {
  static async create ({ userId, input }) {
    try {
      const user = await MongoUserModel.findById(userId)
      user.exercises.push(input)
      const newExercise = await user.save()

      return {
        response: newExercise,
        message: EXERCISE_SUCCESS_MESSAGE.SUCCESS_CREATE_EXERCISE,
        ok: IS_SUCCESSFUL
      }
    } catch (err) {
      console.log(err)
      return {
        response: NO_RESPONSE_FROM_SERVER,
        message: EXERCISE_ERROR_MESSAGE.ERR_CREATE_EXERCISE,
        ok: IS_NOT_SUCCESSFUL
      }
    }
  }
}
