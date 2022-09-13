import express from 'express';
import ProductsController from './controllers/products.controllers';

const routes = express.Router();

const productsController = new ProductsController();

routes.post('/products', productsController.create);

export default routes;