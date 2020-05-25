'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    //relacion de producto con categoria
    Categorias() {
        return this.belongsTo('App/Models/CategoryProduct')
    }
}

module.exports = Product
