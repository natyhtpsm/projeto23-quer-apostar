import { prisma } from '@/config';
import faker from '@faker-js/faker'
export async function createParticipants(name: string, balance: number ){
    const participant = await prisma.usuario.create({
        data: {
        name,
        balance,
        },
    });
    return participant;
}