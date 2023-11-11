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
}

export default new ParticipantsRepository();



