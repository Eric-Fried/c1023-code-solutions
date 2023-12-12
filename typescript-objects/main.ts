interface StudenProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudenProps = {
  firstName: 'Eric',
  lastName: 'Fried',
  age: 32,
};
const fullName: string = student.firstName + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Mechanic';

console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);

interface Vehicle {
  make: string;
  year: number;
  model: string;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'BMW',
  year: 2024,
  model: 'M3',
};

vehicle['color'] = 'sao paul yellow';
vehicle['isConvertible'] = false;

console.log('value of  vehicle["color"]:', vehicle['color']);
console.log('value of  vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:\n', vehicle);

interface Pet {
  name?: string;
  kind?: string;
}
const pet: Pet = {
  name: 'nova',
  kind: 'dog',
};

delete pet.name;
delete pet.kind;

console.log('value of pet:\n', pet);
