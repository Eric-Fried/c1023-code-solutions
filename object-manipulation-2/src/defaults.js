/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (source[key] !== target[key] && typeof target[key] === 'undefined') {
      target[key] = source[key];
    }
  }
}
