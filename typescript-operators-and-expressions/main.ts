const width: number = 4;
const height: number = 5;

const area: number = width * height;

console.log('area:', area);
console.log('typeof area:', typeof area);

const bill: number = 100;
const payment: number = 500;
const change: number = bill - payment;

console.log('change:', change);
console.log('typeof change:', typeof change);

const quizes: number = 100;
const midterm: number = 80;
const final: number = 90;

const grade: number = (quizes + midterm + final) / 3;

console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Eric';
const lastName: string = 'Fried';
const fullName: string = firstName + ' ' + lastName;

console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 10;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);
const headCount: number = 10;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);
let motto: string = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
