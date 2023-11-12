import gamesRepository from '../repositories/gamesRepository';

class GamesService {
  async createGame(homeTeamName: string, awayTeamName: string) {
    return gamesRepository.createGame(homeTeamName, awayTeamName);
  }

  async finishGame(id: number, homeTeamScore: number, awayTeamScore: number) {
    const game = await gamesRepository.getGameById(id);
    if (!game || game.isFinished) {
      throw new Error('O jogo não pode ser finalizado.');
    }

    return gamesRepository.finishGame(id, homeTeamScore, awayTeamScore);
  }

  async getAllGames() {
    return gamesRepository.getAllGames();
  }

  async getGameByIdWithBets(gameId: number) {
    return gamesRepository.getGameByIdWithBets(gameId);
  }

  async isGameFinished(gameId: number) {
    const game = await gamesRepository.getGameById(gameId);
    return game?.isFinished || false;
  }
}


export default new GamesService();
