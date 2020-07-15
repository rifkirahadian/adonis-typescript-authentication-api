import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const registerValidate = {
  username: schema.string({}, [
    rules.unique({ table: 'users', column: 'username' }),
  ]),
  name: schema.string(),
  password: schema.string(),
  phoneNumber: schema.number(),
}
