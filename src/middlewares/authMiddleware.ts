import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/authConfig';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (token == null) {
    res.status(401).send('Unauthorized'); 
    return;
  }
  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      res.status(403).send('Forbidden'); 
      return;
    }
    req.user = user;
    next();
  });
};
