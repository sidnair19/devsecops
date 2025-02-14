const request = require("supertest");
const app = require("../../server/server");

describe("Integration Tests", () => {
  test("should trigger a pipeline and fetch status", async () => {
    const triggerResponse = await request(app)
      .post("/api/pipeline/trigger")
      .send({ pipelineId: "12345" });

    expect(triggerResponse.status).toBe(200);
    expect(triggerResponse.body).toHaveProperty("message", "Pipeline triggered successfully");

    const statusResponse = await request(app).get("/api/pipeline/status/12345");
    expect(statusResponse.status).toBe(200);
    expect(statusResponse.body).toHaveProperty("status");
  });

  test("should scan a container image for vulnerabilities", async () => {
    const scanResponse = await request(app)
      .post("/api/security/scan")
      .send({ imageName: "test-image" });

    expect(scanResponse.status).toBe(200);
    expect(scanResponse.body).toHaveProperty("vulnerabilities");
  });
});