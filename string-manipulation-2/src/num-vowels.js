/* exported numVowels */
function numVowels(string) {
  let vowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === 'A' ||
      string.charAt(i) === 'a' ||
      string.charAt(i) === 'e' ||
      string.charAt(i) === 'E' ||
      string.charAt(i) === 'i' ||
      string.charAt(i) === 'I' ||
      string.charAt(i) === 'o' ||
      string.charAt(i) === 'O' ||
      string.charAt(i) === 'u' ||
      string.charAt(i) === 'U'
    ) {
      vowels += 1;
    }
  }
  return vowels;
}
