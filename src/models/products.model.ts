import { Pool, ResultSetHeader } from 'mysql2';
import ProductBody from '../interfaces/product.body.interface';
// import connection from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(body: ProductBody): Promise<ProductBody> {
    const { name, amount } = body;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    console.log(result);
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, name, amount };
  }
}