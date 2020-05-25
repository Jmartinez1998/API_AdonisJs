'use strict'
const Product = use('App/Models/Product');
class ProductController {
    async store({ request }) {

        const { name_product, category_id, Description} = request.all();
        const producto = await Product.create({
            name_product,
            category_id,
            Description
        });
        return producto;
    };
}

module.exports = ProductController
