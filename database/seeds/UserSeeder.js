'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
//const Database = use('Database');

class UserSeeder {
  async run () {
    await Factory.model('App/Models/User').create();
    //console.log(us)
  }
}

module.exports = UserSeeder
