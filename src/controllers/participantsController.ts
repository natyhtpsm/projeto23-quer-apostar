import { Request, Response } from 'express';
import participantsService from '../services/participantsService';

class ParticipantsController {
  async createParticipant(req: Request, res: Response) {
    try {
      const { name, balance } = req.body;
      const participant = await participantsService.createParticipant(name, balance);
      return res.status(201).json(participant);
    } catch (error) {
      console.error('Erro ao criar participante:', error);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }
  async getAllParticipants(req: Request, res: Response) {
    try {
      const allParticipants = await participantsService.getAllParticipants();
      return res.status(200).json(allParticipants);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new ParticipantsController();
