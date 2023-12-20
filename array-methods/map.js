const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salesPrices = prices.map((element) => ({
  price: element,
  salePrice: element / 2,
}));
console.log(salesPrices);

const formatedPrice = prices.map((element) => '$' + element.toFixed(2));
console.log(formatedPrice);
