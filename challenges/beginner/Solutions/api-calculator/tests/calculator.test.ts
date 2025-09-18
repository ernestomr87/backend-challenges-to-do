import { sum, subtract, multiply, divide, validateParams, ParamsRequest } from '../app';

describe('Calculator Functions', () => {
  describe('sum', () => {
    it('should add two positive numbers correctly', () => {
      expect(sum(2, 3)).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      expect(sum(-2, -3)).toBe(-5);
    });

    it('should add positive and negative numbers correctly', () => {
      expect(sum(5, -3)).toBe(2);
    });

    it('should handle decimal numbers correctly', () => {
      expect(sum(2.5, 3.7)).toBeCloseTo(6.2);
    });

    it('should handle zero correctly', () => {
      expect(sum(0, 5)).toBe(5);
      expect(sum(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract negative numbers correctly', () => {
      expect(subtract(-2, -3)).toBe(1);
    });

    it('should subtract positive and negative numbers correctly', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    it('should handle decimal numbers correctly', () => {
      expect(subtract(5.7, 2.3)).toBeCloseTo(3.4);
    });

    it('should handle zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should multiply negative numbers correctly', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    it('should multiply positive and negative numbers correctly', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    it('should handle decimal numbers correctly', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    it('should handle zero correctly', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should divide negative numbers correctly', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    it('should divide positive and negative numbers correctly', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    it('should handle decimal numbers correctly', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    it('should handle division resulting in decimal correctly', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333333);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('validateParams', () => {
    it('should return valid for correct parameters', () => {
      const params: ParamsRequest = { a: 5, b: 3 };
      const result = validateParams(params);
      expect(result.valid).toBe(true);
    });

    it('should return invalid when parameter a is undefined', () => {
      const params = { a: undefined, b: 3 } as any;
      const result = validateParams(params);
      expect(result.valid).toBe(false);
      expect(result.error).toBe("Missing required parameter 'a'");
    });

    it('should return invalid when parameter b is undefined', () => {
      const params = { a: 5, b: undefined } as any;
      const result = validateParams(params);
      expect(result.valid).toBe(false);
      expect(result.error).toBe("Missing required parameter 'b'");
    });

    it('should return invalid when parameter a is NaN', () => {
      const params: ParamsRequest = { a: NaN, b: 3 };
      const result = validateParams(params);
      expect(result.valid).toBe(false);
      expect(result.error).toBe("Parameter 'a' must be a valid number");
    });

    it('should return invalid when parameter b is NaN', () => {
      const params: ParamsRequest = { a: 5, b: NaN };
      const result = validateParams(params);
      expect(result.valid).toBe(false);
      expect(result.error).toBe("Parameter 'b' must be a valid number");
    });

    it('should handle zero values correctly', () => {
      const params: ParamsRequest = { a: 0, b: 0 };
      const result = validateParams(params);
      expect(result.valid).toBe(true);
    });

    it('should handle negative values correctly', () => {
      const params: ParamsRequest = { a: -5, b: -3 };
      const result = validateParams(params);
      expect(result.valid).toBe(true);
    });
  });
});