/* exported countdown */

function countdown(number) {
  const reverseNumbers = [];

  while (number >= 0) {
    reverseNumbers.push(number);
    number--;
  }
  return reverseNumbers;

  // return array of number
}
