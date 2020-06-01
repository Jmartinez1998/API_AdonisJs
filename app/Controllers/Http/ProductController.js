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
        try{
            return response.json({
                "status": 
                {
                    "type": "success",
                    "message": "Product add successfully",
                    "code": 200,
                },
                "data": [
                    producto
                ]
            })
        }
        catch(error) {
            return response.json({
                "status": 
                {
                    "type": "Bad Request",
                    "message": "Your product could not be add",
                    "code": 400,
                }
            });
        }
        //return response.ok(producto);
    };
}

module.exports = ProductController
