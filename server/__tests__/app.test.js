const request = require('supertest');
const app = require('./../app');

describe('App', () => {
  describe('Ping', () => {
    test('it should return 200 with the request body ', async () => {
      const testBody = { test: 'testing' };
      const response = await request(app)
        .post('/ping')
        .send(testBody);
      expect(response.body).toEqual({
        ping: `was ponged with: ${JSON.stringify(testBody)}`
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
