/* exported invert */
function invert(source) {
  const output = {};
  for (const key in source) {
    output[source[key]] = key;
  }
  return output;
}
