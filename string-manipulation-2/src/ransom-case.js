/* exported ransomCase */
function ransomCase(string) {
  let output = '';
  for (let i = 0; i < string.length; i += 2) {
    output += string.charAt(i).toLowerCase();
    output += string.charAt(i + 1).toUpperCase();
  }
  return output;
}
