import mongoose from 'mongoose'
import { USER_SCHEMA } from '../../../schemas/mongodb/user.js'
import { IS_NOT_SUCCESSFUL, IS_SUCCESSFUL, NO_RESPONSE_FROM_SERVER, USER_ERROR_MESSAGE, USER_SUCCESS_MESSAGE } from '../../../consts/users.js'

const MongoUserModel = mongoose.model(
  'User', USER_SCHEMA)

export class UserModel {
  static async getAll () {
    try {
      const users = await MongoUserModel.find()

      return {
        response: users,
        message: USER_SUCCESS_MESSAGE.SUCCESS_GET_ALL_USERS,
        ok: IS_SUCCESSFUL
      }
    } catch (err) {
      console.log(err)

      return {
        response: NO_RESPONSE_FROM_SERVER,
        message: USER_ERROR_MESSAGE.ERR_GET_ALL_USERS,
        ok: IS_NOT_SUCCESSFUL
      }
    }
  }

  static async create ({ input }) {
    try {
      const user = await MongoUserModel.create(input)

      return {
        response: user,
        message: USER_SUCCESS_MESSAGE.SUCCESS_CREATE_USER,
        ok: IS_SUCCESSFUL
      }
    } catch (err) {
      console.log(err)

      return {
        response: NO_RESPONSE_FROM_SERVER,
        message: USER_ERROR_MESSAGE.ERR_CREATE_USER,
        ok: IS_NOT_SUCCESSFUL
      }
    }
  }

  static async getUserLogs ({ id, from, to, limit }) {
    try {
      const user = await MongoUserModel.findById(id)

      const userDoc = await user._doc

      const userExercises = from && to
        ? userDoc.exercises.filter(exercise => {
          const exerciseDateTime = new Date(exercise.date).getTime()

          const fromDateTime = new Date(from).getTime()

          const toDateTime = new Date(to).getTime()

          return exerciseDateTime >= fromDateTime && exerciseDateTime <= toDateTime
        })
        : userDoc.exercises

      const limitedUserExercises = userExercises.slice(0, limit)

      const { username, _id } = userDoc

      const logsCounter = limitedUserExercises.length

      return {
        response: {
          counter: logsCounter,
          username,
          _id,
          log: limitedUserExercises
        },
        message: USER_SUCCESS_MESSAGE.SUCCESS_GET_USER_LOGS,
        ok: IS_SUCCESSFUL
      }
    } catch (err) {
      console.log(err)
      return {
        response: NO_RESPONSE_FROM_SERVER,
        message: USER_ERROR_MESSAGE.ERR_GET_USER_LOGS,
        ok: IS_NOT_SUCCESSFUL
      }
    }
  }
}
