import { Request, Response } from 'express';
import ProductsService from '../services/products.services';

export default class ProductsController {
  constructor(private productService = new ProductsService()) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const product = await this.productService.create(req.body);
    return res.status(201).json(product);
  };
}