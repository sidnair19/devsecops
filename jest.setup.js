// Load environment variables for Jest tests
require('dotenv').config();

// Mock console errors to keep test output clean
global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
};

module.exports = async () => {
  // Any additional setup before tests run can be added here
};