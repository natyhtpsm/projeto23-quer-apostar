import { Request, Response, NextFunction } from 'express';

const validateFinishGameMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamScore, awayTeamScore } = req.body;

  if (!homeTeamScore || !awayTeamScore) {
    return res.status(400).json({ error: 'Please provide homeTeamScore and awayTeamScore in the request body.' });
  }

  next();
};

export default validateFinishGameMiddleware;
