'use strict'
//Importo modelo del las categorias del producto
const Category = use('App/Models/CategoryProduct');

class CategoryProductController {

    async index({ auth }) {

            const userlog = await auth.getUser();
            try {
                //return {mensaje:"Usuario logueado!"}
                return await userlog.products().fetch();
            } 
            catch(error) {
                return {mensaje:"Usuario no logueado!"}
            }

    };

    async store({ request }) {

        const { categoryname, description} = request.all();
        const categoria = await Category.create({
            categoryname,
            description
        });
        return categoria;
    };
}

module.exports = CategoryProductController
