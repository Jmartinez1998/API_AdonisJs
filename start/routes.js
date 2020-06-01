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
Route.post('users/login', 'UserController.login');
//Agrupamos las rutas
Route.group(() => {
  Route.post('users/login', 'UserController.login');
  // Ruta del registroo nvo usuario
  Route.post('users/regis', 'UserController.store');
  Route.delete('users/delete/:id', 'UserController.destroy');
  //Ruta del Login
  //Route.post('users/login', 'UserController.login');
  //Crea nva categoria
  Route.post('newCategory', 'CategoryProductController.store');
  Route.get('verus', 'CategoryProductController.index');

  Route.get('/categorias', async () => {
    return await Database.table('category_products').select('*')
  })
  //Agrega nmnvo producto
  Route.post('Newproducts', 'ProductController.store');
  //Comentarios agregar
  Route.post('newComment', 'CommentController.com');
  //Eliminar comentario
  Route.delete('deleteComment/:id', 'CommentController.destroy');
  //Actualiza comentarios 
  Route.post('updateComment/:id', 'CommentController.actualizar');
  //Muestra los comentarios
  Route.get('comentarios', async () => {
      return await Database.table('comentarios').select('*')
  })
  //Muesta productos
  Route.get('productos', async () => {
    return await Database.table('products').select('*')
  })
  Route.get('comentarios', async () => {
    return await Database.table('comments').select('*')
  })
  //CRUD Escuelas
  Route.post('schools/new', 'SchoolController.create');
  Route.post('schools/update/:id', 'SchoolController.update');
   Route.delete('schools/delete/:id', 'SchoolController.destroy');
}).prefix('api/').middleware(['auth']);;
  Route.delete('schools/delete/:id', 'SchoolController.destroy');
  //Muestra los comentarios
  Route.get('comentarios', async () => {
    return await Database.table('comentarios').select('*')
  }).prefix('api/').middleware(['auth']);;//eto chi

//jesus Rutas we
Route.group(() => {
  Route.post('New', 'PackController.Store')
  Route.get('Take', 'PackController.getAllPack')
  Route.put('Update', 'PackController.Update')
  Route.delete('Delete', 'PackController.Delete')

}).prefix('Packs/').middleware(['auth']);
