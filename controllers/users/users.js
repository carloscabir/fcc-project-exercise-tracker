export class UserController { 
  constructor({ userController }) {
    this.userModel = userModel
  }
  
  addUser = async () => { }
  
  getUserLogs = async () => { 
    const { id: userId } = req.params
  }
}