import { Request, Response, NextFunction } from 'express';
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

const userLogin = async ({ email, password }: ILogin) => {
  const user = await userModel.findOne({ where: { email, password } });
  return user as userModel;
};

export default {
  validateEmail,
  validatePassword,
  userLogin,
};
