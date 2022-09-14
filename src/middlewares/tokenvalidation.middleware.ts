import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const secret = process.env.SECRET || 'secret';

const tokenValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const verify = jwt.verify(authorization, secret);
    console.log(verify);
  } catch (err) {
    return res.status(401).json({ message: 'invalid token' });
  }
  next();
};

export default tokenValidationMiddleware;