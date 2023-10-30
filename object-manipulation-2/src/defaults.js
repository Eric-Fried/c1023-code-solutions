/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (source[key] !== target[key]) {
      target[key] = source[key];
    } else if (source[key] === target[key]) {
      console.log(target[key]);
    }
  }
}
