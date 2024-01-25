import { createApp } from "./index.js"

import { ExerciseModel } from "./models/mongodb/exercise/exercise.js"
import { UserModel } from "./models/mongodb/user/user.js"

createApp({
  models: {
    exerciseModel: ExerciseModel,
    userModel: UserModel
  }
})