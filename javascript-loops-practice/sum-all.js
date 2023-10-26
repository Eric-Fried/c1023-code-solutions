/* exported sumAll */

function sumAll(numbers) {
  let sumOfArray = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfArray += numbers[i];
  }
  return sumOfArray;
}
