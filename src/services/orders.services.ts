import OrdersResult from '../interfaces/orders.result.interface';
import OrdersModel from '../models/orders.models';

export default class OrdersServices {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  getAll = async (): Promise<OrdersResult[]> => this.model.getAll();
}