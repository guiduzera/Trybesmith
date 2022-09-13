import { Request, Response } from 'express';
import 'express-async-errors';
import UsersServices from '../services/users.services';
import tokenGenerator from '../helpers/jwt';

const secret = 'secret';

export default class UsersController {
  constructor(private userController = new UsersServices()) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const confirm = await this.userController.create(req.body);
    if (confirm) {
      const token = tokenGenerator({ user: req.body.username }, secret);
      return res.status(201).json({ token });
    }
    return res.status(400).json({ message: 'algo deu errado!' });
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    const confirm = await this.userController.login(req.body);
    if (confirm) {
      const token = tokenGenerator({ user: req.body.username }, secret);
      return res.status(200).json({ token });
    }
    return res.status(401).json({ message: 'Username or password invalid' });
  };
}