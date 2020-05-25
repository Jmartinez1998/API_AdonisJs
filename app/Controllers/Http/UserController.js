'use strict'

//Importar modelo User
const User =use('App/Models/User');

class UserController {
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
        return user;
    };
}

module.exports = UserController
