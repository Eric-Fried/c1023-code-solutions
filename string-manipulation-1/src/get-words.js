/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    const output = string.split(' ');
    return output;
  } else {
    return [];
  }
}
