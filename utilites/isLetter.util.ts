/**
 *  Utility function for checking if a character is a letter between a-z.
 */
export function isLetter(char: string): boolean {
  char = char.toLowerCase();
  return char >= "a" && char <= "z";
}
