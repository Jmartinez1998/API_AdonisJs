'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolsSchema extends Schema {
  up () {
    this.create('schools', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.text('description').notNullable()
      table.integer('phone')
      table.integer('mobile')
      table.text('information')
      table.string('email', 254)
      table.string('schedule', 60)
      table.string('turn', 60)
      table.string('location', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('schools')
  }
}

module.exports = SchoolsSchema
