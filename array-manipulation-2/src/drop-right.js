/* exported dropRight */

function dropRight(array, count) {
  if (count > array.length) {
    return array.slice(array.length);
  } else {
    return array.slice(0, array.length - count);
  }
}
