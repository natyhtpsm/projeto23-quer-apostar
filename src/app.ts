import express, { Express } from 'express';
import cors from 'cors';
import { loadEnv, connectDb, disconnectDB } from '@/config';
import participantsRouter from './routers/participantsRoutes';
import gamesRouter from './routers/gamesRoutes';
import betsRouter from './routers/betsRouter';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/participants', participantsRouter)
  .use('/bets', betsRouter)
  .use('/games', gamesRouter)
  
export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
