import { FastifyInstance } from "fastify";
import { buildApp } from "../app";

describe("Calculator API Integration Tests", () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = buildApp();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe("GET /", () => {
    it("should return welcome message", async () => {
      const response = await app.inject({
        method: "GET",
        url: "/",
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toBe('🧮 Calculator API is running ✨');
    });
  });

  describe("POST /add", () => {
    it("should add two positive numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: { a: 5, b: 3 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(8);
    });

    it("should add negative numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: { a: -2, b: -3 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(-5);
    });

    it("should handle decimal numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: { a: 2.5, b: 3.7 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBeCloseTo(6.2);
    });

    it("should return error when parameter a is missing", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: { b: 3 },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Missing required parameter 'a'");
    });

    it("should return error when parameter b is missing", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: { a: 5 },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Missing required parameter 'b'");
    });

    it("should return error when parameter a is not a number", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: { a: "invalid", b: 3 },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Parameter 'a' must be a valid number");
    });
  });

  describe("POST /subtract", () => {
    it("should subtract two numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/subtract",
        payload: { a: 10, b: 3 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(7);
    });

    it("should handle negative result correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/subtract",
        payload: { a: 3, b: 10 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(-7);
    });

    it("should return error when parameters are invalid", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/subtract",
        payload: { a: "invalid", b: "also_invalid" },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Parameter 'a' must be a valid number");
    });
  });

  describe("POST /multiply", () => {
    it("should multiply two numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/multiply",
        payload: { a: 4, b: 5 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(20);
    });

    it("should handle multiplication by zero", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/multiply",
        payload: { a: 5, b: 0 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(0);
    });

    it("should handle negative numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/multiply",
        payload: { a: -3, b: 4 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(-12);
    });
  });

  describe("POST /divide", () => {
    it("should divide two numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/divide",
        payload: { a: 10, b: 2 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(5);
    });

    it("should handle division with decimal result", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/divide",
        payload: { a: 10, b: 3 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBeCloseTo(3.333333);
    });

    it("should return error when dividing by zero", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/divide",
        payload: { a: 10, b: 0 },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Division by zero is not allowed");
    });

    it("should handle negative numbers correctly", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/divide",
        payload: { a: -10, b: 2 },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toBe(-5);
    });
  });

  describe("Error handling", () => {
    it("should handle empty request body", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: {},
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Missing required parameter 'a'");
    });

    it("should handle null values", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/add",
        payload: { a: null, b: 5 },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Missing required parameter 'a'");
    });
  });
});
