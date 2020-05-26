'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentariosSchema extends Schema {
  up () {
    this.create('comentarios', (table) => {
      table.increments()
      table.string('comments', 200)
      table.integer('fk_users').unsigned().references('id').inTable('user')
      table.string('message')
      table.string('affair')
      table.integer('status')
      table.timestamps()
      
    })
  }

  down () {
    this.drop('comentarios')
  }
}

module.exports = ComentariosSchema
