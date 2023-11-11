import { Router } from 'express';
import participantsController from '../controllers/participantsController';
import validateParticipantMiddleware from '@/middlewares/participantsMiddleware';

const participantsRouter = Router();

participantsRouter.post('/participants', validateParticipantMiddleware, participantsController.createParticipant);

export default participantsRouter;
