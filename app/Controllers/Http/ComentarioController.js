'use strict'
const Comentario = use('App/Models/Comment');
class ComentarioController {
    async store({ response, request }) {
        const { comments, fk_users, message, affair, status} = request.all();
        const comments = await Comentario.create({
            comments,
            fk_users,
            message,
            affair,
            status

        });
        return response.ok(comments);
    }
}

module.exports = ComentarioController
