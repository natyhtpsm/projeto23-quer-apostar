import { Request, Response, NextFunction } from 'express';

const validateBetMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = req.body;

  if (!homeTeamScore || !awayTeamScore || !amountBet || !gameId || !participantId) {
    return res
      .status(400)
      .json({ error: 'Please provide homeTeamScore, awayTeamScore, amountBet, gameId, and participantId in the request body.' });
  }

  next();
};

export default validateBetMiddleware;
