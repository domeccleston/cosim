# Cosim

Compute the cosine similarity of two vectors. Useful when working with LLMs. Fully typed, zero dependencies.

## Install

`npm install cosim`

## Usage

You can specify vectors as arrays, or as Javascript objects with string keys and number
values. 

Constraints:
- Both arguments must have the same type: you can't compare objects with arrays.
- Vectors must have the same length.
- Vector values must be numbers.

### Example usage

With objects:
```ts
import { similarity } from "cosim"

const result = similarity(
  { x: 1, y: 3, z: -5}, 
  { x: 4, y: -2, z: -1 }
).toFixed(3); // 0.111
```

With arrays:
```ts
const result = similarity(
  [0.1, 0.5, 0.9], 
  [0.3, 0.8, 0.2]
).toFixed(3); // 0.672
```

The library also exposes its helper for computing the dot product of two vectors

```ts
  const vector1 = { x: -1, y: -2 };
  const vector2 = { x: -3, y: -4 };
  expect(dotProduct(vector1, vector2)).toEqual(11);
```

## Todo

- [ ] Test with very large arrays
- [ ] Compare with Python equivalents to ensure correctness