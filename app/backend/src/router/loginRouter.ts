import * as express from 'express';
import loginService from '../database/services/loginService';
import userLogin from '../database/controllers/loginController';

const loginRouter = express.Router();

loginRouter.post('/login', loginService.validateEmail, loginService.validatePassword, userLogin);

export default loginRouter;
