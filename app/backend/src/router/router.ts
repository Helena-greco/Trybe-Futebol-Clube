import * as express from 'express';
import loginService from '../database/services/loginService';
import userLogin from '../database/controllers/loginController';
import clubController from '../database/controllers/clubController';
import getAll from '../database/controllers/matchController';

const router = express.Router();

router
  .route('/login')
  .post(
    loginService.validateEmail,
    loginService.validatePassword,
    userLogin,
  );

router
  .route('/login/validate')
  .get(loginService.tokenValid);

router
  .route('/clubs')
  .get(clubController.allClubs);

router
  .route('/clubs/:id')
  .get(clubController.clubById);

router
  .route('/matchs')
  .get(getAll);

export default router;
