import { Request, Response, NextFunction } from 'express';

const validateParticipantMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, balance } = req.body;

  if (!name || !balance) {
    return res.status(400).json({ error: 'Nome e saldo são obrigatórios.' });
  }

  if (balance < 1000) {

    return res.status(400).json({ error: 'O saldo inicial deve ser no mínimo R$ 10,00.' });
  }

  next();
};

