import betsRepository from '@/repositories/betsRepository';

class BetsService {
  async createBet(homeTeamScore: number, awayTeamScore: number, amountBet: number, gameId: number, participantId: number) {
    return betsRepository.createBet(homeTeamScore, awayTeamScore, amountBet, gameId, participantId);
  }
  
}

export default new BetsService();
