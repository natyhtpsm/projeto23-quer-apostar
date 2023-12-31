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
  async finishGame(id: number, homeTeamScore: number, awayTeamScore: number) {
    return prisma.jogo.update({
      where: { id },
      data: {
        homeTeamScore,
        awayTeamScore,
        isFinished: true,
      },
    });
  }
  async getAllGames(){
    return prisma.jogo.findMany();
  }
  async getGameByIdWithBets(gameId: number) {
    return prisma.jogo.findUnique({
      where: { id: gameId },
      include: { bets: true },
    });
  }
  async getGameById(gameId: number) {
    return prisma.jogo.findUnique({
      where: { id: gameId },
    });
  }

}

export default new GamesRepository();
