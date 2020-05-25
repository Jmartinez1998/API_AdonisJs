'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/pepe', () => {
  return { greeting: 'Hello pepe in JSON' }
})
//Agrupamos las rutas 
Route.group(()=> {
  // Ruta del registroo nvo usuario
  Route.post('users/regis', 'UserController.store');
  //Ruta del Login
  Route.post('users/login', 'UserController.login');
}).prefix('api/')