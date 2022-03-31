import { Request, Response } from 'express';
import matchService from '../services/matchService';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  const matchInProgress = String(inProgress);

  if (inProgress) {
    const progress = await matchService.getInProgress(matchInProgress);
    return res.status(200).json(progress);
  }
  const getMatchs = await matchService.getAllMatchs();

  return res.status(200).json(getMatchs);
};

export default getAll;
