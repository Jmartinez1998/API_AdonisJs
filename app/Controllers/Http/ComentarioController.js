'use strict'
const Comentario = use('App/Models/Comment');
class ComentarioController {
    async store({ response, request }) {
        const { fk_user, message, affair, status} = request.all();
        const comments = await Comentario.create({
            fk_user,
            message,
            affair,
            status

        });
        return response.ok(comments);
    }
}

module.exports = ComentarioController
