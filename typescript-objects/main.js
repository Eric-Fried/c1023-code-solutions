var student = {
  firstName: 'Eric',
  lastName: 'Fried',
  age: 32,
};
var fullName = student.firstName + student.lastName;
console.log('fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Mechanic';
console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);
var vehicle = {
  make: 'BMW',
  year: 2024,
  model: 'M3',
};
vehicle['color'] = 'sao paul yellow';
vehicle['isConvertible'] = false;
console.log('value of  vehicle["color"]:', vehicle['color']);
console.log('value of  vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:\n', vehicle);
var pet = {
  name: 'nova',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:\n', pet);
