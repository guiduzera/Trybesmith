import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import CustomRequest from '../interfaces/request.interface';

const secret = process.env.SECRET || 'secret';

type UserName = {
  user: number;
};

const tokenValidationMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const verify = jwt.verify(authorization, secret);
    const { user } = verify as UserName;
    req.u = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenValidationMiddleware;