import express from 'express';
import ProductsController from './controllers/products.controllers';
import UsersController from './controllers/users.controllers';

const routes = express.Router();

const productsController = new ProductsController();

const usersController = new UsersController();

routes.post('/products', productsController.create);

routes.get('/products', productsController.getAll);

routes.post('/users', usersController.create);

export default routes;