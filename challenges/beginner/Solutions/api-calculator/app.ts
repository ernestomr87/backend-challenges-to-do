import fastify, { FastifyInstance } from "fastify";

export type ParamsRequest = {
  a: number;
  b: number;
};

export const validateParams = (params: ParamsRequest) => {
  const { a, b } = params;
  if (a === undefined || a === null) {
    return {
      valid: false,
      error: "Missing required parameter 'a'",
    };
  }
  const numA = Number(a);
  if (isNaN(numA)) {
    return {
      valid: false,
      error: "Parameter 'a' must be a valid number",
    };
  }

  if (b === undefined || b === null) {
    return {
      valid: false,
      error: "Missing required parameter 'b'",
    };
  }
  const numB = Number(b);
  if (isNaN(numB)) {
    return {
      valid: false,
      error: "Parameter 'b' must be a valid number",
    };
  }
  return {
    valid: true,
  };
};

export const sum = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};

export function buildApp(): FastifyInstance {
  const server = fastify();

  server.get("/", async () => {
    return "🧮 Calculator API is running ✨";
  });

  server.post("/add", async (request, reply): Promise<number> => {
    const { a, b } = request.body as ParamsRequest;
    const validation = validateParams({ a, b });
    if (!validation.valid) {
      return reply.status(400).send({
        error: validation.error,
      });
    }

    const data: ParamsRequest = {
      a: Number(a),
      b: Number(b),
    };
    return sum(data.a, data.b);
  });

  server.post("/subtract", async (request, reply): Promise<number> => {
    const { a, b } = request.body as ParamsRequest;
    const validation = validateParams({ a, b });
    if (!validation.valid) {
      return reply.status(400).send({
        error: validation.error,
      });
    }

    const data: ParamsRequest = {
      a: Number(a),
      b: Number(b),
    };
    return subtract(data.a, data.b);
  });

  server.post("/multiply", async (request, reply): Promise<number> => {
    const { a, b } = request.body as ParamsRequest;
    const validation = validateParams({ a, b });
    if (!validation.valid) {
      return reply.status(400).send({
        error: validation.error,
      });
    }

    const data: ParamsRequest = {
      a: Number(a),
      b: Number(b),
    };
    return multiply(data.a, data.b);
  });

  server.post("/divide", async (request, reply): Promise<number | string> => {
    const { a, b } = request.body as ParamsRequest;
    const validation = validateParams({ a, b });
    if (!validation.valid) {
      return reply.status(400).send({
        error: validation.error,
      });
    }

    const data: ParamsRequest = {
      a: Number(a),
      b: Number(b),
    };

    try {
      return divide(data.a, data.b);
    } catch (error) {
      return reply.status(400).send({
        error: (error as Error).message,
      });
    }
  });

  return server;
}
