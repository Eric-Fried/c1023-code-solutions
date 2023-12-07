function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('convertMinutesToSeconds value:', convertMinutesToSeconds(5));

function greet(name: string): string {
  return 'Hey, ' + name;
}

console.log(greet('Beavis'));

function getArea(width: number, height: number): number {
  return width * height;
}

console.log(getArea(17, 42));

interface Person {
  firstName: string;
  lastName: string;
}

function getFirstName(person: Person): string {
  return person.firstName;
}

console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array: string[]): string {
  return array[array.length - 1];
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
