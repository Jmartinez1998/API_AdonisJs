'use strict'
const Product = use('App/Models/Product');
// Add products
class ProductController {
    async store({ request,response }) {
        const { name_product, category_id, Description} = request.all();
        const producto = await Product.create({
            name_product,
            category_id,
            Description
        });

        return response.ok(producto);
    };
}

module.exports = ProductController
