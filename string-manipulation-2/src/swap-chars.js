/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const index1 = string[firstIndex];
  const index2 = string[secondIndex];

  const swappedString =
    string.slice(0, firstIndex) +
    index2 +
    string.slice(firstIndex + 1, secondIndex) +
    index1 +
    string.slice(secondIndex + 1);

  return swappedString;
}
