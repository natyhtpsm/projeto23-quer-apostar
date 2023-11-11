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
}

export default new ParticipantsController();
