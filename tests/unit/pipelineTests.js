const { triggerPipeline } = require('../../server/controllers/pipelineController');
const { savePipelineLog } = require('../../server/models/pipelineModel');

describe('Pipeline Controller Unit Tests', () => {
  test('should trigger pipeline successfully', async () => {
    const req = { body: { pipelineId: 'testPipeline' } };
    const res = { json: jest.fn() };

    await triggerPipeline(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: 'Pipeline triggered successfully', pipelineId: 'testPipeline' });
  });

  test('should save pipeline log', async () => {
    const log = { pipelineId: 'testPipeline', status: 'success' };

    const result = await savePipelineLog(log);

    expect(result.pipelineId).toBe('testPipeline');
    expect(result.status).toBe('success');
  });
});