const fs = require('fs');
const path = require('path');

// Setup test database
const testDbPath = path.join(__dirname, '..', 'test.db');

// Clean up test database before each test suite
beforeAll(() => {
  // Remove test database if it exists
  if (fs.existsSync(testDbPath)) {
    fs.unlinkSync(testDbPath);
  }
});

// Clean up test database after all tests
afterAll(() => {
  // Remove test database if it exists
  if (fs.existsSync(testDbPath)) {
    fs.unlinkSync(testDbPath);
  }
});

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.DB_PATH = testDbPath;