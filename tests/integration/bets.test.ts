import request from 'supertest';
import faker from '@faker-js/faker';
import app from '@/app';
import { prisma } from '@/config';
import { createParticipants } from '../factories/participantFactory';

beforeEach(async () => {

    await prisma.aposta.deleteMany();
    await prisma.usuario.deleteMany();
    await createParticipants('fulano', 1000); 
});

describe('POST /bets', () => {
    it('should create a bet', async () => {
        const gameId = 1; 
        const participantId = 1; 
        const response = await request(app)
            .post('/bets')
            .send({
                homeTeamScore: 1,
                awayTeamScore: 2,
                amountBet: 1000,
                gameId,
                participantId,
            });
        expect(response.status).toBe(201);
    });
});


