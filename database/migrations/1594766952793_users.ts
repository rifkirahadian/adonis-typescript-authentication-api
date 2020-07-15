import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 150).notNullable()
      table.string('username', 100).unique().notNullable()
      table.string('password', 100).notNullable()
      table.string('phone_number', 20)
      table.string('email', 100)
      table.string('image', 120)
      table.string('gender', 10)
      table.string('remember_me_token').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
