'use strict'

const Comment = use('App/Models/Comment');
const adonis2 = use('Database')
class CommentController {
    async com({ request, response }) {
        const { affair, message, fk_user, status } = request.all();
        const comentario = await Comment.create({
            affair,
            message,
            fk_user,
            status
        })
        try {
            return response.json({
                "status":{
                    "type": "success",
                    "message": "Comment add successfully",
                    "code": 200,
                },
                "data": [
                    comentario
                ]
            })
            
        } catch (error) {
            return response.json({
                "status":{
                    "type": "Bad Request",
                    "message": "Your comment could not be add",
                    "code": 400,
                }
            });
        }
    }

    async destroy({ params:{id}, request, response }){
        const comenta = await adonis2
        .table('comments')
        .where('id', id)
        .delete()

        try {
            return response.json({
                "status":
                {
                    "type": "success",
                    "message": "This comment is delete",
                    "code": 200,
                },
                "data": [
                    comenta
                ]
            })
            
        } catch (error) {
            return response.json({
                "status":{
                    "type": "Bad Request",
                    "message": "",
                    "code": 400,
                }
            });
            
        }

    }

    async actualizar({ params:{id}, request, response }){
        const { affair, message, status } = request.all();
        const comentar = await adonis2
        .table('comments')
        .where('id', id)
        .update({
            affair: affair,
            message: message,
            status: status
        })

        const find_comment = await Comment.find(id)
        const commentEdit = await Comment.query().where('id', id).fetch()
        return response.status(200).send({message:'Message update',date:commentEdit});
    }
}

module.exports = CommentController
