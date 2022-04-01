import { Request, Response } from 'express';
import createLeaderboard from '../services/leaderBoard';

const leaderBoard = async (_req: Request, res: Response) => {
  const leaderBoardComplete = await createLeaderboard();

  return res.status(200).json(leaderBoardComplete);
};

export default leaderBoard;
