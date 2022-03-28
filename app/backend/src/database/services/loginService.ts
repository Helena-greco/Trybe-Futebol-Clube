import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import userModel from '../models/user';
import { ILogin } from '../interface/ILogin';

const validEmail = (email: string) => {
  const emailFormat = /\S+@\S+\.\S+/;
  return emailFormat.test(email);
};

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email }: ILogin = req.body;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!validEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password }: ILogin = req.body;
  if (!password) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" must be 7 characters long' });
  }
  next();
};

const secret = fs.readFileSync('../jwt.evaluation.key', { encoding: 'utf8', flag: 'r' });

const tokenValid = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(token, secret);

    if (!decoded) return res.status(401).json({ message: 'Token not found' });

    next();
  } catch (error) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

const userLogin = async (email:string, password:string) => {
  const user = await userModel.findOne({ where: { email, password } });
  if (!user) throw new Error('User not found');
  return user;
};

export default {
  validateEmail,
  validatePassword,
  tokenValid,
  userLogin,
};
