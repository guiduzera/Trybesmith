import { RowDataPacket } from 'mysql2';
import UsersBody from '../interfaces/users.body.interface';
import connection from './connection';

export default class UsersModel {
  create = async (body: UsersBody): Promise<boolean> => {
    const { username, classe, level, password } = body;
    await connection.execute(
      'INSERT INTO Trybesmith.Users (userName, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return true;
  };
  
  login = async (body: UsersBody): Promise<boolean> => {
    const { username, password } = body;
    const user = await connection.execute<RowDataPacket[]>(
      'SELECT password FROM Trybesmith.Users WHERE userName = ?',
      [username],
    );
    const [data] = user;
    if (data.length === 0) return false;
    if (data[0].password !== password) return false;
    return true;
  };
}