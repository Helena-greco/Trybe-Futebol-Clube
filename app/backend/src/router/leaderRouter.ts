import * as express from 'express';
import leaderBoard from '../database/controllers/leaderboard';

const leader = express.Router();

leader
  .route('/leaderboard/home')
  .get(leaderBoard);

export default leader;
