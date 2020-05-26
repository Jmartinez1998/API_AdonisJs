'use strict'

//Importar modelo User
const User =use('App/Models/User');

class UserController {
    // Usa AWJ Autenticacion retorna el Token
    async login({ request, auth}) {
        const { email, password} = request.all();
        const tok = await auth.attempt(email, password);
        return tok; 
    };
    //Crea nuevo usuario
    async store({ request }) {
        /*return {
            mensaje:"Cremos el user desde el controller!"
        }*/
        const { email, password} = request.all();
        const user= await User.create({
            email,
            password,
            username: email
        });
        return this.login(...arguments);
    };
    // Desrtoy userSelect
    async destroy({response, params, auth}) {
        const user = await auth.getUser()
        if(user.id) {
            //throw new UnauthorizedException();
            await user.delete()
            return {mensaje:"Usuario Eliminado satisfactoriamente!"}
        }
    }
}

module.exports = UserController
