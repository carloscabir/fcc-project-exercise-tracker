import { validateUser } from '../../schemas/zod/user'

export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  addUser = async (req, res) => {
    const safeUser = validateUser(req.body)

    if (safeUser.error) return res.status(400).json(safeUser)

    const newUser = await this.userModel.create({ input: safeUser.data })
    if (!newUser.ok) return res.status(404).json(newUser)

    return res.status(2001).json(newUser)
  }

  getUserLogs = async (req, res) => {
    const { id: userId } = req.params
  }
}
