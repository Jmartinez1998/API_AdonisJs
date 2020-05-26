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
const Database = use('Database')

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
  Route.delete('users/delete/:id', 'UserController.destroy');
  //Ruta del Login
  Route.post('users/login', 'UserController.login');
  //Crea nva categoria
  Route.post('newCategory', 'CategoryProductController.store');
  Route.get('verus', 'CategoryProductController.index');

  
  Route.post('newComment', 'ComentarioController.store');


  Route.get('/categorias', async () => {
    return await Database.table('category_products').select('*')
  })
  //Agrega nmnvo producto
  Route.post('Newproducts', 'ProductController.store');
  //Muesta productos
  Route.get('productos', async () => {
    return await Database.table('products').select('*')
  })
  //Muestra los comentarios
  Route.get('comentarios', async () => {
    return await Database.table('comentarios').select('*')
  })
}).prefix('api/')