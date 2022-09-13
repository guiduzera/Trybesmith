import { Request, Response } from 'express';
import 'express-async-errors';
import jwt from 'jsonwebtoken';
import UsersServices from '../services/users.services';

const secret = 'secret';

export default class UsersController {
  constructor(private userController = new UsersServices()) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const confirm = await this.userController.create(req.body);
    if (confirm) {
      const token = jwt
        .sign({ user: req.body.username }, secret, { expiresIn: '7d', algorithm: 'HS256' });
      return res.status(201).json({ token });
    }
    return res.status(400).json({ message: 'algo deu errado!' });
  };
}