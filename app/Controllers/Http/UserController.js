'use strict'

//Importar modelo User
const User =use('App/Models/User');

class UserController {
    // Usa AWJ Autenticacion retorna el Token
    async login({ request, auth,response}) {
        const { email, password} = request.all();
        //return token;
        const token = await auth
                .withRefreshToken()
                .attempt(email, password)
                try {
                    await auth.check()
                    return response.json({
                        "status": 
                        {
                            "type": "success",
                            "message": "Success",
                            "code": 200,
                        },
                        "data": [
                            {
                                "user": {
                                    "email": email,
                                }
                            }
                        ]
                    });
                  } catch (error) {
                    return response.json({
                        "status": 
                        {
                            "type": "Bad Request",
                            "message": "Missing or invalid jwt token",
                            "code": 400,
                        }
                    });
                  }
    };

    //Crea nuevo usuario
    async store({ request,response }) {
        const { username, email, password} = request.all();
        const user= await User.create({
            username,
            email,
            password
        });
        return response.json({
            "status":
            {
                "type": "success",
                "message": "User successfully created",
                "code": 200,
            },
            "data": [{
                "username":username,
                "email" : email
            }]
        }) ;
    };

    // Desrtoy userSelect
    async destroy({response, params, auth}) {
        const user = await auth.getUser()
        if(user.id) {
            //throw new UnauthorizedException();
            await user.delete()
            return response.json({
                "status":{
                    "type": "success",
                    "message": "User successfully delete",
                    "code": 200,
                }
            })
        }
    }
}

module.exports = UserController
