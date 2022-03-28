import * as express from 'express';
import loginService from '../database/services/loginService';
import userLogin from '../database/controllers/loginController';

const router = express.Router();

router
  .route('/login')
  .post(
    loginService.validateEmail,
    loginService.validatePassword,
    userLogin,
  );

export default router;
