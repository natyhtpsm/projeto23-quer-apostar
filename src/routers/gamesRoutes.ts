import { Router } from 'express';
import gamesController from '@/controllers/gamesController';
import validateGameMiddleware from '@/middlewares/gamesMiddleware';

const gamesRouter = Router();

gamesRouter.post('/games', validateGameMiddleware, gamesController.createGame);

export default gamesRouter;
