import { Request, Response } from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import loginService from '../services/loginService';
import { ILogin, IUser } from '../interface/ILogin';

const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const userLogin = async (req: Request, res: Response) => {
  const { email, password }: ILogin = req.body;

  const user = await loginService.userLogin({ email, password });

  const { id, username, role } = user as IUser;

  const token = jwt.sign({ username }, secret, { algorithm: 'HS256' });

  return res.status(200).json({ user: { id, username, role, email }, token });
};

export default userLogin;
