import { Router } from 'express';
import gamesController from '@/controllers/gamesController';
import validateGameMiddleware from '@/middlewares/gamesMiddleware';
import validateFinishGameMiddleware from '@/middlewares/gamesMiddlewareFinish';

const gamesRouter = Router();

gamesRouter.post('/games', validateGameMiddleware, gamesController.createGame);
gamesRouter.post('/:id/finish', validateFinishGameMiddleware, gamesController.finishGame);

export default gamesRouter;
