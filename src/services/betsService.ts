import betsRepository from '../repositories/betsRepository';
import participantsService from '../services/participantsService';
import gamesService from '../services/gamesService';

class BetsService {
  async createBet(homeTeamScore: number, awayTeamScore: number, amountBet: number, gameId: number, participantId: number) {
    
    const isGameFinished = await gamesService.isGameFinished(gameId);
    if (isGameFinished) {
      throw new Error('Não é possível fazer apostas em um jogo finalizado.');
    }

    const participant = await participantsService.getParticipant(participantId);
    if (!participant || participant.balance < amountBet) {
      throw new Error('Saldo insuficiente para fazer esta aposta.');
    }

    await participantsService.subtractBalance(participantId, amountBet);

    return betsRepository.createBet(homeTeamScore, awayTeamScore, amountBet, gameId, participantId);
  }
}

export default new BetsService();
