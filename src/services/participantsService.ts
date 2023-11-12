import participantsRepository from '../repositories/participantsRepository';

class ParticipantsService {
  async createParticipant(name: string, balance: number) {
    return participantsRepository.createParticipant(name, balance);
  }
  async getAllParticipants() {
    return participantsRepository.getAllParticipants();
  }
  async getParticipant(participantId: number) {
    return participantsRepository.getParticipant(participantId);
  }
  async subtractBalance(participantId: number, amount: number) {
    const participant = await participantsRepository.getParticipant(participantId);

    if (!participant) {
      throw new Error('Participante não encontrado.');
    }

    if (participant.balance < amount) {
      throw new Error('Saldo insuficiente para realizar a operação.');
    }

    const newBalance = participant.balance - amount;
    await participantsRepository.updateBalance(participantId, newBalance);

    return newBalance;
  }
  async clearAllParticipants() {
    return participantsRepository.clearAllParticipants();
  }
}

export default new ParticipantsService();

