import { Router } from 'express';
import betsController from '@/controllers/betsController';
import validateBetMiddleware from '@/middlewares/betsMiddleware';

const betsRouter = Router();

betsRouter.post('/bets', validateBetMiddleware, betsController.createBet);

export default betsRouter;
