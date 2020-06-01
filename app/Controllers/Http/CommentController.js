'use strict'

const Comment = use('App/Models/Comment');
class CommentController {
    async com({ request, response }) {
        const { affair, message, fk_user, status } = request.all();
        const comentario = await Comment.create({
            affair,
            message,
            fk_user,
            status
        })
        return response.ok(comentario);
    }
}

module.exports = CommentController
