const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((element) => console.log(`in order:`, element));

values.forEach((element, index, array) =>
  console.log(`in reverse`, array[array.length - 1 - index])
);
