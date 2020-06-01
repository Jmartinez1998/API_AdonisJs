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
<<<<<<< HEAD
Route.post('users/login', 'UserController.login');
//Agrupamos las rutas 
=======
//Agrupamos las rutas
>>>>>>> 094eec7ea80d35695b1986a7cbf2f8e1930884d8
Route.group(()=> {
  // Ruta del registroo nvo usuario
  Route.post('users/regis', 'UserController.store');
  Route.delete('users/delete/:id', 'UserController.destroy');
  //Ruta del Login
  //Route.post('users/login', 'UserController.login');
  //Crea nva categoria
  Route.post('newCategory', 'CategoryProductController.store');
  Route.get('verus', 'CategoryProductController.index');
<<<<<<< HEAD
  
=======

  Route.post('newComment', 'ComentarioController.store');

>>>>>>> 094eec7ea80d35695b1986a7cbf2f8e1930884d8
  Route.get('/categorias', async () => {
    return await Database.table('category_products').select('*')
  })
  //Agrega nmnvo producto
  Route.post('Newproducts', 'ProductController.store');
  //Comentarios agregar
  Route.post('newComment', 'CommentController.com')
  //Muesta productos
  Route.get('productos', async () => {
    return await Database.table('products').select('*')
  })
<<<<<<< HEAD
  Route.get('comentarios', async () => {
    return await Database.table('comments').select('*')
  })
=======
   //CRUD Escuelas
  Route.post('schools/new', 'SchoolController.create');
  Route.get('schools/update/:id', 'SchoolController.update');
>>>>>>> 094eec7ea80d35695b1986a7cbf2f8e1930884d8
  //Muestra los comentarios
  Route.get('comentarios', async () => {
    return await Database.table('comentarios').select('*')
  })
}).prefix('api/').middleware(['auth']);
