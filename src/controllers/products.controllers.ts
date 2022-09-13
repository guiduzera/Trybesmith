import { Request, Response } from 'express';
import 'express-async-errors';
import ProductsService from '../services/products.services';

export default class ProductsController {
  constructor(private productService = new ProductsService()) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const product = await this.productService.create(req.body);
    return res.status(201).json(product);
  };

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };
}