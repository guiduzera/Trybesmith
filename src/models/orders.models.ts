import { RowDataPacket } from 'mysql2';
import OrdersResult from '../interfaces/orders.result.interface';
import connection from './connection';

export default class OrdersModel {
  getAll = async (): Promise<OrdersResult[]> => {
    const [orders] = await connection.execute<RowDataPacket[]>(
      `SELECT o.id, o.userId, GROUP_CONCAT(p.id) AS productsIds
           FROM Trybesmith.Orders AS o
          INNER JOIN Trybesmith.Products AS p
             ON o.id = p.orderId
          GROUP BY o.id
          ORDER BY o.userId, o.id ASC;`,
    );
    const result = orders.map((order) => {
      const productId = order.productsIds.split(',');
      const idArray = productId.map((Number));
      return { ...order, productsIds: idArray };
    });
    return result as OrdersResult[];
  };
}