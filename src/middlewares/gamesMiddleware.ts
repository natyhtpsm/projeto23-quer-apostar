import { Request, Response, NextFunction } from 'express';

const validateGameMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamName, awayTeamName } = req.body;

  if (!homeTeamName || !awayTeamName) {
    return res.status(400).json({ error: 'Please provide homeTeamName and awayTeamName in the request body.' });
  }

  next();
};

export default validateGameMiddleware;
