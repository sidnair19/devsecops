const request = require('supertest');
const app = require('../../server/server');

describe('Integration Tests for CI/CD and Security Workflow', () => {
  test('should trigger pipeline and return status', async () => {
    const response = await request(app).post('/api/pipeline/trigger').send({ pipelineId: 'testPipeline' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Pipeline triggered successfully', pipelineId: 'testPipeline' });
  });

  test('should run security scan and return results', async () => {
    const response = await request(app).post('/api/security/scan').send({ imageId: 'testImage' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Security scan completed', imageId: 'testImage' });
  });
});
