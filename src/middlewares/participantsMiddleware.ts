import { Request, Response, NextFunction } from 'express';

const validateParticipantMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, balance } = req.body;

  if (!name || !balance) {
    return res.status(400).json({ error: 'Nome e saldo são obrigatórios.' });
  }

  next();
};

export default validateParticipantMiddleware;
