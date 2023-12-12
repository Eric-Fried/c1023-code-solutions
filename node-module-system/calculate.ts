import { add } from './add.js';
import { multiply } from './multiply.js';
import { subtract } from './subtract.js';
import { divide } from './divide.js';

if (process.argv[3] === 'plus') {
  console.log(add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'times') {
  console.log(multiply(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'over') {
  console.log(divide(Number(process.argv[2]), Number(process.argv[4])));
} else {
  console.log('invalid operation');
}
