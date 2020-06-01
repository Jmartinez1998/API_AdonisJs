'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentsSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.string('affair',100)
      table.string('message',200)
      table.integer('fk_user').unsigned().references('id').inTable('users')
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentsSchema
