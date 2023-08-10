/**
 *  Utility function for checking if a character is an English letter (between a-z).
 *
 * @returns `true` if the character is an English letter, `false` for words or other characters.
 */
export function isEnglishLetter(char: string): boolean {
  if (char.length !== 1) {
    return false;
  }
  char = char.toLowerCase();
  return char >= "a" && char <= "z";
}
