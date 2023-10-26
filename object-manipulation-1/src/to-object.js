/* exported toObject */
function toObject(keyValuePair) {
  const output = {};

  output[keyValuePair[0]] = keyValuePair[1];

  return output;
}
