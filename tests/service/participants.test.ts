import { PrismaClient } from '@prisma/client';
import participantsService from '@/services/participantsService';

const prisma = new PrismaClient();

describe('Participants Service', () => {
  beforeAll(async () => {
    await prisma.usuario.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Deve criar um participante', async () => {
    const participant = await participantsService.createParticipant('Teste', 1000);
    expect(participant).toHaveProperty('id');
    expect(participant.name).toBe('Teste');
    expect(participant.balance).toBe(1000);
  });

  test('Deve obter todos os participantes', async () => {
    await participantsService.createParticipant('Participante1', 1500);
    await participantsService.createParticipant('Participante2', 2000);

    const allParticipants = await participantsService.getAllParticipants();
    expect(allParticipants.length).toBe(2);
    expect(allParticipants[0].name).toBe('Participante1');
    expect(allParticipants[1].name).toBe('Participante2');
  });
});

