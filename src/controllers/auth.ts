import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/authConfig';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await UserModel.createUser(username, hashedPassword);
  res.status(201).json({ message: 'User registered successfully' });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const user = await UserModel.getUserByUsername(username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ message: 'Invalid username or password' });
    return;
  }
  const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: '12h' });
  res.json({ token });
};
