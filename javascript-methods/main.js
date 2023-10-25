const num1 = 3;
const num2 = 5;
const num3 = 6;

const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

const heroes = ['batman', 'ironman', 'captain america', 'thor'];
let randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'the adventures of huckleberry finn',
    author: 'Mark Twain',
  },

  {
    title: 'To kill a mockingbird',
    author: 'harper lee',
  },

  {
    title: 'the art of war',
    author: 'sun Tzu',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

const fullName = 'Eric Fried';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
