const { runSecurityScan } = require('../../server/controllers/securityController');
const { saveScanReport } = require('../../server/models/securityModel');

describe('Security Controller Unit Tests', () => {
  test('should run security scan successfully', async () => {
    const req = { body: { imageId: 'testImage' } };
    const res = { json: jest.fn() };

    await runSecurityScan(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: 'Security scan completed', imageId: 'testImage' });
  });

  test('should save scan report', async () => {
    const report = { imageId: 'testImage', vulnerabilities: [] };

    const result = await saveScanReport(report);

    expect(result.imageId).toBe('testImage');
    expect(result.vulnerabilities).toEqual([]);
  });
});