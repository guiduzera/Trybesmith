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
}