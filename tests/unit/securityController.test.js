const { scanContainerImage } = require("../../server/controllers/securityController");
const { mockRequest, mockResponse } = require("@mocks");

describe("Security Controller - Unit Tests", () => {
  test("should scan container image for vulnerabilities", async () => {
    const req = mockRequest({ imageName: "test-image" });
    const res = mockResponse();

    await scanContainerImage(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        vulnerabilities: expect.any(Array),
      })
    );
  });
});