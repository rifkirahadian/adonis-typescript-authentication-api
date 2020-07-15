// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthModules from 'App/Modules/Auth'
import { registerValidate } from 'App/Validators/AuthValidator'

export default class AuthController extends AuthModules {
  public async register ({request, response}: HttpContextContract) {
    try {
      await this.formValidate(registerValidate, request, response)

      let {username, name, phoneNumber, password} = request.post()
      await this.saveUser(username, name, phoneNumber, password)

      return this.successResponse(null, 'Register Succeed', response)
    } catch (error) {
      return this.errorResponseHandle(error, response)
    }
  }
}
