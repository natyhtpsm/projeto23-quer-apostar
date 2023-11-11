import gamesRepository from '@/repositories/gamesRepository';

class GamesService {
  async createGame(homeTeamName: string, awayTeamName: string) {
    return gamesRepository.createGame(homeTeamName, awayTeamName);
  }
  async finishGame(id: number, homeTeamScore: number, awayTeamScore: number) {
    return gamesRepository.finishGame(id, homeTeamScore, awayTeamScore);
  }
  async getAllGames(){
    return gamesRepository.getAllGames();
  }
}

export default new GamesService();
