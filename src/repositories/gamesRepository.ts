import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class GamesRepository {
  async createGame(homeTeamName: string, awayTeamName: string) {
    return prisma.jogo.create({
      data: {
        homeTeamName,
        awayTeamName,
        homeTeamScore: 0,
        awayTeamScore: 0,
        isFinished: false,
      },
    });
  }
}

export default new GamesRepository();
