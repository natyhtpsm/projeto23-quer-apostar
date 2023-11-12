
import request from 'supertest';
import app from '../../src/app';
import participantsService from '../../src/services/participantsService';

describe('Participants Integration Tests', () => {
  beforeAll(async () => {
    await participantsService.clearAllParticipants();
  });

  afterAll(async () => {
    await participantsService.clearAllParticipants();
  });

  it('should create a participant via API', async () => {
    const response = await request(app)
      .post('/participants')
      .send({
        name: 'TestParticipant',
        balance: 1000,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('TestParticipant');
    expect(response.body.balance).toBe(1000);
  });

  it('should get all participants via API', async () => {
    const participant1 = await participantsService.createParticipant('Participant1', 1500);
    const participant2 = await participantsService.createParticipant('Participant2', 2000);

    const response = await request(app).get('/participants');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toBe(participant1.name);
    expect(response.body[1].name).toBe(participant2.name);
  });
});