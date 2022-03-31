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

const createMatch = async (req: Request, res: Response) => {
  const newMatch = req.body;
  const { homeTeam, awayTeam } = newMatch;

  if (homeTeam === awayTeam) {
    return res.status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  const HTeam = await matchService.teamById(Number(homeTeam));
  const ATeam = await matchService.teamById(Number(awayTeam));

  if (!HTeam || !ATeam) {
    return res.status(401).json({ message: 'There is no team with such id!' });
  }

  const match = await matchService.createMatch(newMatch);

  if (!match) return res.status(401).json(newMatch);

  return res.status(201).json(match);
};

export default {
  getAll,
  createMatch,
};
