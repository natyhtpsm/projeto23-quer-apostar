import { Request, Response } from 'express';
import gamesService from '@/services/gamesService';

class GamesController {
  async createGame(req: Request, res: Response) {
    try {
      const { homeTeamName, awayTeamName } = req.body;
      const game = await gamesService.createGame(homeTeamName, awayTeamName);
      return res.status(201).json(game);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async finishGame(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { homeTeamScore, awayTeamScore } = req.body;
      const gameId = parseInt(id, 10);

      const updatedGame = await gamesService.finishGame(gameId, homeTeamScore, awayTeamScore);
      return res.status(200).json(updatedGame);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new GamesController();
