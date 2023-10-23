const student = {
  fistName: 'Eric',
  lastName: 'Fried',
  age: 32,
};

const fullName = student.fistName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Automotive Mechanic';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);
console.log('value of student:\n', student);

const vehicle = {
  make: 'BMW',
  year: 2024,
  model: 'M3',
};

vehicle['color'] = 'sao paul yellow';
vehicle['isConvertible'] = false;

console.log('value of  vehicle["color"}:', vehicle['color']);
console.log('value of  vehicle["isConvertible"}:', vehicle['isConvertible']);
console.log('value of vehicle:\n', vehicle);

const pet = {
  name: 'nova',
  type: 'dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet:\n', pet);
