const { triggerPipeline, getPipelineStatus } = require("../../server/controllers/pipelineController");
const { mockRequest, mockResponse } = require("@mocks");

describe("Pipeline Controller - Unit Tests", () => {
  test("should trigger a pipeline successfully", async () => {
    const req = mockRequest({ pipelineId: "12345" });
    const res = mockResponse();

    await triggerPipeline(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "Pipeline triggered successfully" });
  });

  test("should get pipeline status", async () => {
    const req = mockRequest({ params: { pipelineId: "12345" } });
    const res = mockResponse();

    await getPipelineStatus(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        pipelineId: "12345",
        status: expect.any(String),
      })
    );
  });

});