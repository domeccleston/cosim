import { similarity } from "./dist/index.mjs";

const result = similarity([0.1, 0.5, 0.9], [0.3, 0.8, 0.2]).toFixed(3);

console.log(result);
