import { Router } from 'express';
import participantsController from '../controllers/participantsController';
import validateParticipantMiddleware from '@/middlewares/participantsMiddleware';

const participantsRouter = Router();

participantsRouter.post('/', validateParticipantMiddleware, participantsController.createParticipant);
participantsRouter.get('/', participantsController.getAllParticipants);

export default participantsRouter;
