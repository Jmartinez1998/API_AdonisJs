'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pack extends Model 
{
    users() 
    {
        return this.belongsTo('App/Models/Products')
    }
}

module.exports = Pack
