'use strict'
const Product = use('App/Models/Product');
const Database = use('Database')
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
    // Desrtoy userSelect
    async deleteProduct({response, params:id,}) {
            const school = await Database
            .table('products')
            .where('id', id)
            .delete()
            try{
                return response.json({
                    "status": 
                    {
                        "type": "success",
                        "message": "Product delete successfully",
                        "code": 200,
                    }
                })
            }
            catch(error) {
                return response.json({
                    "status": 
                    {
                        "type": "Bad Request",
                        "message": "Your product could not be delete",
                        "code": 400,
                    }
                });
            }
    }
    async update({ params:{id} ,request,response }) {
        const { name_product, category_id, Description} = request.all();
        const prod = await Database
        .table('products')
        .where('id',id)
        .update({
            name_product: name_product,
            category_id: category_id,
            Description: Description,
        })

        const ProductEdit = await prod.query().where('id',id).fetch()
        return response.json({
            "status": 
            {
                "type": "success",
                "message": "Product update successfully",
                "code": 200,
            },
            "data" : [
                ProductEdit
            ]
        })
      };

}

module.exports = ProductController
