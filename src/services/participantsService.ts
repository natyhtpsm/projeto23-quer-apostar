import participantsRepository from '../repositories/participantsRepository';

class ParticipantsService {
  async createParticipant(name: string, balance: number) {
    return participantsRepository.createParticipant(name, balance);
  }
}

export default new ParticipantsService();

