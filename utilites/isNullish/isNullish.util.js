/**
 * Returns `true` if `val` is `null` or `undefined`
 *
 * @param {any} value
 * @returns {boolean}
 */
export function isNullish(value) {
  return value === undefined || value === null;
}
