import { Request, Response } from 'express';
import 'express-async-errors';
import CustomRequest from '../interfaces/request.interface';
import OrdersServices from '../services/orders.services';

export default class OrdersControllers {
  private sercive: OrdersServices;

  constructor() {
    this.sercive = new OrdersServices();
  }

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.sercive.getAll();
    return res.status(200).json(orders);
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const { u } = req as CustomRequest;
    const { productsIds } = req.body;
    const result = await this.sercive.create(productsIds, u);
    return res.status(201).json(result);
  };
}