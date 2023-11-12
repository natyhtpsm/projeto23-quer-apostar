import { Router } from 'express';
import gamesController from '@/controllers/gamesController';
import validateGameMiddleware from '@/middlewares/gamesMiddleware';
import validateFinishGameMiddleware from '@/middlewares/gamesMiddlewareFinish';

const gamesRouter = Router();

gamesRouter.post('/', validateGameMiddleware, gamesController.createGame);
gamesRouter.post('/:id/finish', validateFinishGameMiddleware, gamesController.finishGame);
gamesRouter.get('/', gamesController.getAllGames);
gamesRouter.get('/:id', gamesController.getGameByIdWithBets);

export default gamesRouter;
