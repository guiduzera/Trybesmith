import { ResultSetHeader, RowDataPacket } from 'mysql2';
import UserResponse from '../interfaces/userResponse.interface';
import UsersBody from '../interfaces/users.body.interface';
import connection from './connection';

export default class UsersModel {
  create = async (body: UsersBody): Promise<UserResponse> => {
    const { username, classe, level, password } = body;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (userName, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, confirm: true };
  };
  
  login = async (body: UsersBody): Promise<UserResponse> => {
    const { username, password } = body;
    const user = await connection.execute<RowDataPacket[]>(
      'SELECT password, id FROM Trybesmith.Users WHERE userName = ?',
      [username],
    );
    const [data] = user;
    if (data.length === 0) return { confirm: false };
    if (data[0].password !== password) return { confirm: false };
    return { id: data[0].id, confirm: true };
  };
}