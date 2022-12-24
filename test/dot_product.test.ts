import { dotProduct } from '../dist';

describe('dotProduct', () => {
  test('should compute the dot product of two arrays', () => {
    const vector1 = [1, 2, 3];
    const vector2 = [4, 5, 6];
    expect(dotProduct(vector1, vector2)).toEqual(32);
  });

  test('should compute the dot product of two objects', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = { x: 3, y: 4 };
    expect(dotProduct(vector1, vector2)).toEqual(11);
  });

  it('should throw an error if the vectors have different lengths', () => {
    const vector1 = [1, 2, 3];
    const vector2 = [1, 2];
    expect(() => dotProduct(vector1, vector2)).toThrowError('Both arguments must have the same length');
  });

  it('should return 0 if the vectors have the same type and length but all values are 0', () => {
    const vector1 = [0, 0, 0];
    const vector2 = [0, 0, 0];
    expect(dotProduct(vector1, vector2)).toEqual(0);
  });

  it('should compute the dot product of two arrays with negative values', () => {
    const vector1 = [-1, -2, -3];
    const vector2 = [-4, -5, -6];
    expect(dotProduct(vector1, vector2)).toEqual(32);
  });

  it('should compute the dot product of two objects with negative values', () => {
    const vector1 = { x: -1, y: -2 };
    const vector2 = { x: -3, y: -4 };
    expect(dotProduct(vector1, vector2)).toEqual(11);
  });

  it('should compute the dot product of two arrays with very long lists of numbers', () => {
    const vector1 = Array.from({ length: 10000 }, (_, i) => i + 1);
    const vector2 = Array.from({ length: 10000 }, (_, i) => i + 1);
    expect(dotProduct(vector1, vector2)).toEqual(333383335000);
  });

  it('should compute the dot product of two arrays with large integers', () => {
    const vector1 = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    const vector2 = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    expect(dotProduct(vector1, vector2)).toEqual(1.6225927682921333e+32);
  });

  it('should compute the dot product of two arrays with different types of numbers', () => {
    const vector1 = [1, 2.5, 3];
    const vector2 = [4, 5, 6];
    expect(dotProduct(vector1, vector2)).toEqual(34.5);
  });
})