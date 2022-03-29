import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import Users from '../models/user';
import { ILogin } from '../interface/ILogin';

const validEmail = (email: string) => {
  const emailFormat = /\S+@\S+\.\S+/;
  return emailFormat.test(email);
};

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email }: ILogin = req.body;

  if (!email) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  if (!validEmail(email)) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password }: ILogin = req.body;
  if (!password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  if (password.length < 6) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  next();
};

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8', flag: 'r' });

const tokenValid = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    const user = await Users.findOne({ where: { email: decoded } });

    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    next();
  } catch (error) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

const userLogin = async (email:string) => {
  const user = await Users.findOne({ where: { email } });
  if (!user) throw new Error('User not found');
  return user;
};

export default {
  validateEmail,
  validatePassword,
  tokenValid,
  userLogin,
};
