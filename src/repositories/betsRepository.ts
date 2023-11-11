import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class BetsRepository {
  async createBet(
    homeTeamScore: number,
    awayTeamScore: number,
    amountBet: number,
    gameId: number,
    participantId: number
  ) {
    return prisma.aposta.create({
      data: {
        homeTeamScore,
        awayTeamScore,
        amountBet,
        gameId,
        participantId,
        status: 'PENDING',
      },
    });
  }
}

export default new BetsRepository();
