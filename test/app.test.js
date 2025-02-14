const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/server'); // Ensure the path is correct

describe('Basic API Tests', () => {
    afterAll(async () => {
        await mongoose.connection.close(); // Ensure MongoDB connection is closed after tests
    });

    it('should return a 200 status for /health', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('OK');
    });
});