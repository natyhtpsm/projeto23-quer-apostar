import { Router } from 'express';
import betsController from '@/controllers/betsController';
import validateBetMiddleware from '@/middlewares/betsMiddleware';

const betsRouter = Router();

betsRouter.post('/', validateBetMiddleware, betsController.createBet);

export default betsRouter;
