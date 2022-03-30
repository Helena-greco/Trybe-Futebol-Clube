import * as express from 'express';
import clubController from '../database/controllers/clubController';

const clubRouter = express.Router();

clubRouter
  .route('/clubs')
  .get(clubController.allClubs);

clubRouter
  .route('/clubs/:id')
  .get(clubController.clubById);

export default clubRouter;
