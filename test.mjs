import { similarity } from "./dist/index.mjs";

const result = similarity(
  { x: 1, y: 3, z: -5, foo: 0 },
  { x: 4, y: -2, z: -1 }
);

const zeroMagnitude = similarity(
  {x: 1, y: 3, z: -5},
  {x: 0, y: 0, z: 0}
)

console.log(zeroMagnitude);