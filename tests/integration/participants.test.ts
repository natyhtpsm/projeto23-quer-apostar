import request from 'supertest';
import faker from '@faker-js/faker'
import app from '@/app';
import { prisma } from '@/config';
import { createParticipants } from '../factories/participantFactory';

beforeEach(()=>{
    prisma.usuario.deleteMany()
})

describe('POST /participants', () =>{
    it('should create a participant', async () =>{
        const response = await request(app)
            .post('/participants')
            .send({
                name: faker.name.firstName(),
                balance: faker.datatype.number(),
            })
        expect(response.status).toBe(201);
    })
})
