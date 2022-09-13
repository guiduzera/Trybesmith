import express from 'express';
import OrdersControllers from './controllers/orders.controllers';
import ProductsController from './controllers/products.controllers';
import UsersController from './controllers/users.controllers';

const routes = express.Router();

const productsController = new ProductsController();

const usersController = new UsersController();

const orderControllers = new OrdersControllers();

routes.post('/products', productsController.create);

routes.get('/products', productsController.getAll);

routes.post('/users', usersController.create);

routes.get('/orders', orderControllers.getAll);

export default routes;