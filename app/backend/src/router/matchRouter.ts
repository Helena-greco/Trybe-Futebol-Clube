import * as express from 'express';
import getAll from '../database/controllers/matchController';

const match = express.Router();

match
  .route('/matchs')
  .get(getAll);

export default match;
