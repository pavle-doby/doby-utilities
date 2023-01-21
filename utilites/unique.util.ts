/**
 * Returns new array with only unique values.
 */
export function unique<T>(array: T[]): T[] {
  const tempArray = array.map((value) => JSON.stringify(value));
  return [...new Set(tempArray)].map((value) => JSON.parse(value));
}
