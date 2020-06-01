'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PackSchema extends Schema {
  up () {
    this.create('packs', (table) => {
      table.increments()
      table.string('packagetype',50)
      table.string('description',100)
      table.integer('cost')
      table.string('status',50)
      table.timestamps()
    })
  }

  down () {
    this.drop('packs')
  }
}

module.exports = PackSchema
