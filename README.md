# Cosim

Compute the cosine similarity of two vectors. Useful when working with LLMs. Fully typed, zero dependencies.

## Install

`npm install cosim`

## Usage

```ts
import { similarity } from "cosim"

const result = similarity(
  { x: 1, y: 3, z: -5, foo: 0 }, // only compares keys present in both objects
  { x: 4, y: -2, z: -1 }
).toFixed(3); // 0.111
```

## Todo

- [ ] Add support for arrays
- [ ] Add maximum integer limit
- [ ] Maybe enforce that vectors be of same length