import { VectorObj } from "./types";

export function isVectorObject(vector: unknown): vector is VectorObj {
  return typeof vector === "object" && !Array.isArray(vector);
}
