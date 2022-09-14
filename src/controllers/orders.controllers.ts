import { Request, Response } from 'express';
import 'express-async-errors';
import OrdersServices from '../services/orders.services';

export default class OrdersControllers {
  public sercive: OrdersServices;

  constructor() {
    this.sercive = new OrdersServices();
  }

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.sercive.getAll();
    return res.status(200).json(orders);
  };
}