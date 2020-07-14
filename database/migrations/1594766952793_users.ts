import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 150)
      table.string('username', 100).unique()
      table.string('password', 80)
      table.string('phoneNumber', 20)
      table.string('email', 100)
      table.string('image', 120)
      table.string('gender', 10)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
