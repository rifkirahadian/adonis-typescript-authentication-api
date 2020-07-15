import User from 'App/Models/User'
import Responser from './Responser'

export default class AuthModules extends Responser {
  public async saveUser (username, name, phoneNumber, password) {
    await User.create({
      username,
      name,
      phoneNumber,
      password,
    })
  }
}
