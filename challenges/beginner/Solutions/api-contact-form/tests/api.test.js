const request = require("supertest");
const fs = require("fs");
const path = require("path");

// Mock the database module to avoid real database operations
jest.mock("../db", () => ({
  initDB: jest.fn(),
  insertContact: jest.fn().mockReturnValue({
    name: "Test User",
    email: "test@example.com",
    message: "Test message"
  })
}));

const { insertContact } = require("../db");

describe("API Integration Tests", () => {
  let app;
  let server;

  beforeAll(() => {
    // Set test environment
    process.env.NODE_ENV = "test";
    
    // Import app after setting environment
    app = require("../index");
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /", () => {
    it("should return welcome message", async () => {
      const response = await request(app)
        .get("/")
        .expect(200);

      expect(response.body).toEqual({
        message: "Welcome to the Contact Form API"
      });
    });
  });

  describe("GET /csrf-token", () => {
    it("should return CSRF token", async () => {
      const response = await request(app)
        .get("/csrf-token")
        .expect(200);

      expect(response.body).toHaveProperty("csrfToken");
      expect(typeof response.body.csrfToken).toBe("string");
      expect(response.body.csrfToken.length).toBeGreaterThan(0);
    });

    it("should set CSRF cookie", async () => {
      const response = await request(app)
        .get("/csrf-token")
        .expect(200);

      const cookies = response.headers["set-cookie"];
      expect(cookies).toBeDefined();
      expect(cookies.some(cookie => cookie.includes("__Host-psifi.x-csrf-token"))).toBe(true);
    });
  });

  describe("POST /contact", () => {
    let csrfToken;
    let cookies;

    beforeEach(async () => {
      // Get CSRF token before each test
      const tokenResponse = await request(app)
        .get("/csrf-token");
      
      csrfToken = tokenResponse.body.csrfToken;
      cookies = tokenResponse.headers["set-cookie"];
    });

    it("should submit contact form successfully with valid CSRF token", async () => {
      const contactData = {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, this is a test message"
      };

      const response = await request(app)
        .post("/contact")
        .set("Cookie", cookies)
        .set("x-csrf-token", csrfToken)
        .send(contactData)
        .expect(201);

      expect(response.body).toEqual({
        message: "Contact form submitted successfully"
      });

      expect(insertContact).toHaveBeenCalledWith(
        contactData.name,
        contactData.email,
        contactData.message
      );
    });

    it("should reject request without CSRF token", async () => {
      const contactData = {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, this is a test message"
      };

      const response = await request(app)
        .post("/contact")
        .send(contactData)
        .expect(403);

      expect(response.body).toHaveProperty("message");
      expect(insertContact).not.toHaveBeenCalled();
    });

    it("should reject request with invalid CSRF token", async () => {
      const contactData = {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, this is a test message"
      };

      const response = await request(app)
        .post("/contact")
        .set("Cookie", cookies)
        .set("x-csrf-token", "invalid-token")
        .send(contactData)
        .expect(403);

      expect(response.body).toHaveProperty("message");
      expect(insertContact).not.toHaveBeenCalled();
    });

    it("should reject request without cookies", async () => {
      const contactData = {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, this is a test message"
      };

      const response = await request(app)
        .post("/contact")
        .set("x-csrf-token", csrfToken)
        .send(contactData)
        .expect(403);

      expect(response.body).toHaveProperty("message");
      expect(insertContact).not.toHaveBeenCalled();
    });

    it("should return 400 for missing required fields", async () => {
      const testCases = [
        { email: "test@example.com", message: "Test message" }, // missing name
        { name: "Test User", message: "Test message" }, // missing email
        { name: "Test User", email: "test@example.com" }, // missing message
        {} // missing all fields
      ];

      for (const contactData of testCases) {
        const response = await request(app)
          .post("/contact")
          .set("Cookie", cookies)
          .set("x-csrf-token", csrfToken)
          .send(contactData)
          .expect(400);

        expect(response.body).toEqual({
          message: "Name, email, and message are required"
        });
        expect(insertContact).not.toHaveBeenCalled();
      }
    });

    it("should return 400 for empty required fields", async () => {
      const contactData = {
        name: "",
        email: "",
        message: ""
      };

      const response = await request(app)
        .post("/contact")
        .set("Cookie", cookies)
        .set("x-csrf-token", csrfToken)
        .send(contactData)
        .expect(400);

      expect(response.body).toEqual({
        message: "Name, email, and message are required"
      });
      expect(insertContact).not.toHaveBeenCalled();
    });

    it("should handle database errors", async () => {
      // Mock database error
      insertContact.mockImplementationOnce(() => {
        throw new Error("Database connection failed");
      });

      const contactData = {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, this is a test message"
      };

      const response = await request(app)
        .post("/contact")
        .set("Cookie", cookies)
        .set("x-csrf-token", csrfToken)
        .send(contactData)
        .expect(500);

      expect(response.body).toEqual({
        message: "Database connection failed"
      });
    });

    it("should handle malformed JSON", async () => {
      const response = await request(app)
        .post("/contact")
        .set("Cookie", cookies)
        .set("x-csrf-token", csrfToken)
        .set("Content-Type", "application/json")
        .send("invalid json")
        .expect(400);

      expect(insertContact).not.toHaveBeenCalled();
    });
  });

  describe("CSRF Protection Edge Cases", () => {
    it("should generate different tokens for different requests", async () => {
      const response1 = await request(app).get("/csrf-token");
      const response2 = await request(app).get("/csrf-token");

      expect(response1.body.csrfToken).not.toEqual(response2.body.csrfToken);
    });

    it("should reject requests with mismatched cookie and token", async () => {
      // Get first token and cookies
      const tokenResponse1 = await request(app).get("/csrf-token");
      const cookies1 = tokenResponse1.headers["set-cookie"];

      // Get second token (but use first cookies)
      const tokenResponse2 = await request(app).get("/csrf-token");
      const token2 = tokenResponse2.body.csrfToken;

      const contactData = {
        name: "John Doe",
        email: "john@example.com",
        message: "Test message"
      };

      const response = await request(app)
        .post("/contact")
        .set("Cookie", cookies1)
        .set("x-csrf-token", token2)
        .send(contactData)
        .expect(403);

      expect(insertContact).not.toHaveBeenCalled();
    });
  });
});