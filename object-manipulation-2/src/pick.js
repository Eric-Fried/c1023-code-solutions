/* exported pick */
function pick(source, keys) {
  const output = {};
  for (const key in source) {
    if (keys.includes(key)) {
      output[key] = source[key];
    }

    // else if (typeof source[keys]=== undefined) {

    //  }
  }

  return output;
}
