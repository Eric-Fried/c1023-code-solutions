/* exported omit */
function omit(source, keys) {
  const output = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      output[key] = source[key];
    }
  }
  return output;
}
