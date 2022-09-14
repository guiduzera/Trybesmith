import express from 'express';
import OrdersControllers from './controllers/orders.controllers';
import ProductsController from './controllers/products.controllers';
import UsersController from './controllers/users.controllers';
import orderValidationMiddleware from './middlewares/orderValidation.middleware';
import productAmountValidation from './middlewares/productAmount.middleware';
import productNameValidation from './middlewares/productName.middleware';
import tokenValidationMiddleware from './middlewares/tokenvalidation.middleware';
import userValidation from './middlewares/userCreate.middleware';
import userLoginMiddleware from './middlewares/userLogin.middleware';

const routes = express.Router();

const productsController = new ProductsController();

const usersController = new UsersController();

const orderControllers = new OrdersControllers();

routes.post('/products', productNameValidation, productAmountValidation, productsController.create);

routes.get('/products', productsController.getAll);

routes.post('/users', userValidation, usersController.create);

routes.get('/orders', orderControllers.getAll);

routes.post(
  '/orders', 
  tokenValidationMiddleware, 
  orderValidationMiddleware,
);

routes.post('/login', userLoginMiddleware, usersController.login);

export default routes;