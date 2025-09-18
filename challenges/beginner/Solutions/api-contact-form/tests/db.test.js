const Database = require("better-sqlite3");
const { initDB, insertContact } = require("../db");

// Mock better-sqlite3 for unit testing
jest.mock("better-sqlite3");

describe("Database Functions", () => {
  let mockDb;
  let mockStmt;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Create mock statement
    mockStmt = {
      run: jest.fn(),
    };

    // Create mock database
    mockDb = {
      exec: jest.fn(),
      prepare: jest.fn().mockReturnValue(mockStmt),
    };

    // Mock Database constructor
    Database.mockImplementation(() => mockDb);
  });

  describe("initDB", () => {
    it("should create contacts table if not exists", () => {
      initDB();

      expect(Database).toHaveBeenCalledWith("mi-app.db");
      expect(mockDb.exec).toHaveBeenCalledWith(
        expect.stringContaining("CREATE TABLE IF NOT EXISTS contacts")
      );
    });

    it("should create table with correct schema", () => {
      initDB();

      const sqlCall = mockDb.exec.mock.calls[0][0];
      expect(sqlCall).toContain("id INTEGER PRIMARY KEY AUTOINCREMENT");
      expect(sqlCall).toContain("name TEXT");
      expect(sqlCall).toContain("email TEXT");
      expect(sqlCall).toContain("message TEXT");
    });
  });

  describe("insertContact", () => {
    const testData = {
      name: "John Doe",
      email: "john@example.com",
      message: "Test message"
    };

    it("should insert contact successfully", () => {
      const result = insertContact(testData.name, testData.email, testData.message);

      expect(mockDb.prepare).toHaveBeenCalledWith(
        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)"
      );
      expect(mockStmt.run).toHaveBeenCalledWith(
        testData.name,
        testData.email,
        testData.message
      );
      expect(result).toEqual(testData);
    });

    it("should handle database errors", () => {
      const error = new Error("Database error");
      mockStmt.run.mockImplementation(() => {
        throw error;
      });

      // Mock console.error to avoid output during tests
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();

      expect(() => {
        insertContact(testData.name, testData.email, testData.message);
      }).toThrow("Database error");

      expect(consoleSpy).toHaveBeenCalledWith("Error inserting contact:", error);
      
      consoleSpy.mockRestore();
    });

    it("should handle empty parameters", () => {
      const result = insertContact("", "", "");

      expect(mockStmt.run).toHaveBeenCalledWith("", "", "");
      expect(result).toEqual({ name: "", email: "", message: "" });
    });

    it("should handle null parameters", () => {
      const result = insertContact(null, null, null);

      expect(mockStmt.run).toHaveBeenCalledWith(null, null, null);
      expect(result).toEqual({ name: null, email: null, message: null });
    });
  });
});