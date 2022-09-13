import { ResultSetHeader } from 'mysql2';
import ProductBody from '../interfaces/product.body.interface';
import connection from './connection';

export default class ProductModel {
  create = async (body: ProductBody): Promise<ProductBody> => {
    const { name, amount } = body;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, name, amount };
  };
}