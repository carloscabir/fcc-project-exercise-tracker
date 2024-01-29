import mongoose from 'mongoose'
import { dbClient } from '../../../utils/dbClient.js'
import { USER_SCHEMA } from '../../../schemas/mongodb/user.js'

dbClient()

const MongoUserModel = mongoose.model(
  'User', USER_SCHEMA)

export class UserModel {
  static async create ({ input }) {
    try {
      const user = await MongoUserModel.create(input)

      return {
        response: user,
        message: 'User created',
        ok: true
      }
    } catch (err) {
      console.log(err)
      return {
        response: null,
        message: 'Error creating user',
        ok: false
      }
    }
  }

  static async getUserLogs ({ id, filters }) {
    const { from, to } = filters
  }
}
