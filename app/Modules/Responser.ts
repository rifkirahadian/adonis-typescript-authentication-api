import { schema } from '@ioc:Adonis/Core/Validator'

export default class Responser {
  public async formValidate (rules, request, response) {
    try {
      await request.validate({
        schema: schema.create(rules),
      })
    } catch (error) {
      throw error
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

  public errorResponseHandle (error, response) {
    if (typeof error !== 'undefined') {
      let status = (error.status ? error.status : 500)
      let message = [{
        message : error.message,
      }]
      if (status === 422) {
        message = error.messages.errors
      }
      return response.status(status).json({
        status: status,
        message,
        data: null,
      })
    } else {
      return error
    }
  }
}
