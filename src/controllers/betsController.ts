import { Request, Response } from 'express';
import betsService from '@/services/betsService';

class BetsController {
  async createBet(req: Request, res: Response) {
    try {
      const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = req.body;
      const bet = await betsService.createBet(homeTeamScore, awayTeamScore, amountBet, gameId, participantId);
      return res.status(201).json(bet);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new BetsController();
