import * as express from 'express';
import matchController from '../database/controllers/matchController';
import matchService from '../database/services/matchService';

const match = express.Router();

match
  .route('/matchs')
  .get(matchController.getAll);

match
  .route('/matchs')
  .post(matchService.tokenValid, matchController.createMatch);

export default match;
