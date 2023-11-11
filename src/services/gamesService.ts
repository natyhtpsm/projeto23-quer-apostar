import gamesRepository from '@/repositories/gamesRepository';

class GamesService {
  async createGame(homeTeamName: string, awayTeamName: string) {
    return gamesRepository.createGame(homeTeamName, awayTeamName);
  }
}

export default new GamesService();
