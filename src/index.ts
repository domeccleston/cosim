import { Vector, VectorArr, VectorObj } from "./types";
import { isVectorObject } from "./utils";

/**
 * Computes the cosine similarity of two vectors.
 *
 * @param vector1 - The first vector. Can be an array of numbers or an object with numeric properties.
 * @param vector2 - The second vector. Must have the same type as `vector1`.
 * @returns The cosine similarity of both vectors.
 */
export function similarity<T extends Vector>(vector1: T, vector2: T): number {
  const product = dotProduct(vector1, vector2);

  const magnitude1 = Math.sqrt(
    Object.values(vector1).reduce((acc, value) => acc + value ** 2, 0)
  );
  const magnitude2 = Math.sqrt(
    Object.values(vector2).reduce((acc, value) => acc + value ** 2, 0)
  );

  if (magnitude1 !== 0 && magnitude2 !== 0) {
    return product / (magnitude1 * magnitude2);
  } else {
    throw new Error("Magnitudes cannot be zero");
  }
}

/**
 * Computes the dot product of two vectors.
 *
 * @param vector1 - The first vector. Can be an array of numbers or an object with numeric properties.
 * @param vector2 - The second vector. Must have the same type as `vector1`.
 * @returns The dot product of the two vectors.
 */
export function dotProduct<T extends Vector>(vector1: T, vector2: T): number {
  if (Array.isArray(vector1) && Array.isArray(vector2)) {
    return dotProductArray(vector1, vector2);
  } else if (isVectorObject(vector1) && isVectorObject(vector2)) {
    return dotProductObject(vector1, vector2);
  } else throw new Error("Both arguments must have the same type");
}

function dotProductArray(vector1: VectorArr, vector2: VectorArr): number {
  if (vector1.length !== vector2.length) {
    throw new Error("Both arguments must have the same length");
  }

  if (!vector1.length || !vector2.length) {
    throw new Error("Vectors must not be of length 0");
  }

  let dotProduct = 0;
  for (let i = 0; i < vector1.length; i++) {
    if (typeof vector1[i]) dotProduct += vector1[i] * vector2[i];
  }
  return dotProduct;
}

function dotProductObject(vector1: VectorObj, vector2: VectorObj): number {
  if (Object.keys(vector1).length !== Object.keys(vector2).length) {
    throw new Error("Both objects must have the same number of properties");
  }

  const keys1 = Object.keys(vector1);
  const keys2 = Object.keys(vector2);

  if (!keys1.length || !keys2.length) {
    throw new Error("Vectors must not be of length 0");
  }

  const intersection = keys1.filter((key) => keys2.includes(key));
  if (intersection.length !== keys1.length) {
    throw new Error("Both objects must have the same keys");
  }

  let dotProduct = 0;
  for (const key of keys1) {
    dotProduct += vector1[key] * vector2[key];
  }
  return dotProduct;
}
