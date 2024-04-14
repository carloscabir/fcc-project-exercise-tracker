import { IS_NOT_SUCCESSFUL, NO_RESPONSE_FROM_SERVER } from '../../consts/users.js'
import { validateUser } from '../../schemas/zod/user.js'

export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  // All the retrieved users schemas are according from the database not the fcc test expectancy
  getAll = async (req, res) => {
    const users = await this.userModel.getAll()

    if (!users.ok) return res.status(404).json(users)

    if (!users.response.length) return res.status(404).json({ response: NO_RESPONSE_FROM_SERVER })

    const { response } = users
    return res.status(200).json(response)
  }

  create = async (req, res) => {
    const safeUser = validateUser(req.body)

    if (safeUser.error) {
      const response = {
        response: NO_RESPONSE_FROM_SERVER,
        message: safeUser.error,
        ok: IS_NOT_SUCCESSFUL
      }

      return res.status(400).json(response)
    }

    const newUser = await this.userModel.create({ input: safeUser.data })

    if (!newUser.ok) return res.status(500).json(newUser)

    const { response } = newUser

    return res.status(201).json(response)
  }

  getUserLogs = async (req, res) => {
    const { id } = req.params
    const { from, to, limit } = req.query

    const userLogs = await this.userModel.getUserLogs({ id, from, to, limit })

    if (!userLogs.ok) return res.status(500).json(userLogs)

    const { response } = userLogs
    return res.status(200).json(response)
  }
}
