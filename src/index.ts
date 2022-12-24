type VectorObj = {
  [key: string]: number;
}

export function dotProduct(vector1: VectorObj, vector2: VectorObj) {
  const keys1 = Object.keys(vector1);
  const keys2 = Object.keys(vector2);

  // Get the intersection of the two arrays of keys
  const intersection = keys1.filter(key => keys2.includes(key));

  // Check if the intersection is not empty
  if (intersection.length > 0) {
    let dotProduct = 0;
    // Loop over the properties in the intersection and compute the dot product
    for (const key of intersection) {
      dotProduct += vector1[key] * vector2[key];
    }
    return dotProduct;
  } else {
    throw new Error('Both objects must have at least one common property');
  }
}

export function similarity(vector1: VectorObj, vector2: VectorObj) {
  // Compute the dot product of the vectors
  const product = dotProduct(vector1, vector2);

  // Compute the magnitudes of the vectors
  const magnitude1 = Math.sqrt(Object.values(vector1).reduce((acc, value) => acc + value ** 2, 0));
  const magnitude2 = Math.sqrt(Object.values(vector2).reduce((acc, value) => acc + value ** 2, 0));

  // Check if the magnitudes are not zero
  if (magnitude1 !== 0 && magnitude2 !== 0) {
    // Compute and return the cosine similarity
    return product / (magnitude1 * magnitude2);
  } else {
    throw new Error('Magnitudes cannot be zero');
  }
}