import mongoose from 'mongoose'

export const USER_SCHEMA = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }
})
