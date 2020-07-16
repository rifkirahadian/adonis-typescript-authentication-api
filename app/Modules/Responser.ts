import { schema } from '@ioc:Adonis/Core/Validator'

export default class Responser {
  public async formValidate (rules, request, response) {
    try {
      await request.validate({
        schema: schema.create(rules),
      })
    } catch (error) {
      throw this.errorResponseValidation(error, response)
    }
  }
  public successResponse (data, message, response) {
    if (message !== null) {
      message = [{
        message,
      }]
    }

    return response.json({
      status: 200,
      message,
      data,
    })
  }

  private errorResponseValidation (errors, response) {
    return response.json({
      status: 422,
      message: errors.messages.errors,
    })
  }

  public errorResponseHandle (error, response) {
    if (typeof error !== 'undefined') {
      let status = (error.status ? error.status : 500)

      return response.status(status).json({
        status: status,
        message: [{
          message : error.message,
        }],
        data: null,
      })
    } else {
      return error
    }
  }
}
