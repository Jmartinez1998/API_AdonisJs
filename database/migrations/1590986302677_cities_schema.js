'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitiesSchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()
      table.string('cityname', 255).notNullable()
      table.string('citycode',3)
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitiesSchema
