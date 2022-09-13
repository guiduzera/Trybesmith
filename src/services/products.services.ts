import ProductBody from '../interfaces/product.body.interface';
// import connection from '../models/connection';
import ProductModel from '../models/products.model';

export default class ProductsService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async create(body: ProductBody): Promise<ProductBody> {
    return this.model.create(body);
  }
}