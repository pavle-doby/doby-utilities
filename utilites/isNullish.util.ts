/**
 * Returns `true` if `val` is `null` or `undefined`
 */
export function isNullish(value: any): boolean {
  return value === undefined || value === null;
}
