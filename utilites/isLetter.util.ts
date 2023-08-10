/**
 * Checks if a character is a letter.
 *
 * @returns `true` if the character is a letter, `false` for words or other characters.
 */
function isLetter(char: string): boolean {
  if (char.length !== 1) {
    return false;
  }
  return char.toLowerCase() !== char.toUpperCase();
}
