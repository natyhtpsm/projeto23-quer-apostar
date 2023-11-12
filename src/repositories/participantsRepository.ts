import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ParticipantsRepository {
    async createParticipant(name: string, balance: number) {
        return prisma.usuario.create({
            data: {
                name,
                balance,
            },
        });
    }
    async getAllParticipants() {
        return prisma.usuario.findMany();
    }
    async getParticipant(participantId: number) {
        return prisma.usuario.findUnique({
          where: {
            id: participantId,
          },
        });
    }
    
  async updateBalance(participantId: number, newBalance: number) {
    return prisma.usuario.update({
      where: {
        id: participantId,
      },
      data: {
        balance: newBalance,
      },
    });
  }
}

export default new ParticipantsRepository();



