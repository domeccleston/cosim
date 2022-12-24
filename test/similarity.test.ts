import { similarity } from '../dist';

describe('similarity', () => {
  it('should compute the cosine similarity of two arrays', () => {
    const vector1 = [1, 2, 3];
    const vector2 = [4, 5, 6];
    expect(similarity(vector1, vector2)).toEqual(0.9746318461970762);
  });

  it('should compute the cosine similarity of two objects', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = { x: 3, y: 4 };
    expect(similarity(vector1, vector2)).toEqual(0.9838699100999074);
  });

  it('should compute the cosine similarity of two arrays with negative values', () => {
    const vector1 = [-1, -2, -3];
    const vector2 = [-4, -5, -6];
    expect(similarity(vector1, vector2)).toEqual(0.9746318461970762);
  });

  it('should compute the cosine similarity of two objects with negative values', () => {
    const vector1 = { x: -1, y: -2 };
    const vector2 = { x: -3, y: -4 };
    expect(similarity(vector1, vector2)).toEqual(0.9838699100999074);
  });

  it('should throw an error if the magnitudes of the vectors are zero', () => {
    const vector1 = [0, 0, 0];
    const vector2 = [0, 0, 0];
    expect(() => similarity(vector1, vector2)).toThrowError('Magnitudes cannot be zero');
  });

  it('should compute the cosine similarity of two arrays with very long lists of numbers', () => {
    const vector1 = Array.from({ length: 10000 }, (_, i) => i + 1);
    const vector2 = Array.from({ length: 10000 }, (_, i) => i + 1);
    expect(similarity(vector1, vector2)).toEqual(1.0000000000000002);
  });

  it('should compute the cosine similarity of two arrays with large integers', () => {
    const vector1 = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    const vector2 = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    expect(similarity(vector1, vector2)).toEqual(1);
  })
})
