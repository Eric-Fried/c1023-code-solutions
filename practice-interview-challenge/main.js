function getRangeReport(start, end) {
  const returnValues = {};
  const startToEnd = Array.from({ length: end + 1 }, (value, index) => index);

  console.log(startToEnd);

  let total = 0;

  for (let i = 0; i < startToEnd.length; i++) {
    total = total + startToEnd[i];

    returnValues.total = total;
  }

  const range = [];
  for (let i = 1; i < startToEnd.length; i++) {
    range.push(startToEnd[i]);
  }
  returnValues.range = range;

  const evens = [];
  for (let i = 1; i < startToEnd.length; i++) {
    if (startToEnd[i] % 2 === 0) {
      evens.push(startToEnd[i]);
    }
  }
  returnValues.evens = evens;

  const odds = [];
  for (let i = 1; i < startToEnd.length; i++) {
    if (startToEnd[i] % 2 !== 0) {
      odds.push(startToEnd[i]);
    }
  }

  returnValues.odds = odds;

  const average = total / range.length;
  returnValues.average = average;

  return returnValues;

  // // The formulate to sum a series of integers is
  //   // n * (max + min) / 2, where n is the length of the series.

  //   //calculate and assign total
  // const n = (end - start + 1)
  // const total = n * (start + end) /2
  // returnValues.total =total

  // //calculate and assign odds
}

getRangeReport(1, 10);
