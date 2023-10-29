/* exported capitalizeWords */

function capitalizeWords(string) {
  const output = string.split(' ');

  for (let i = 0; i < output.length; i++) {
    output[i] = output[i][0].toUpperCase() + output[i].slice(1).toLowerCase();
  }

  return output.join(' ');
}
