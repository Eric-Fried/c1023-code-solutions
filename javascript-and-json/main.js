const library = [
  {
    author: 'john smith',
    isbn: '123-33455-1233',
    title: 'title 1',
  },
  {
    author: 'jane smith',
    isbn: '123-33455-3453',
    title: 'title 2 ',
  },
  {
    author: 'adam smith',
    isbn: '123-33455-9999',
    title: 'title 3',
  },
];

console.log('library:', library);
console.log('typeof library:', typeof library);

const libraryString = JSON.stringify(library);
console.log('libraryString:', libraryString);
console.log('typeof libraryString', typeof libraryString);

const jsonString = '{ "id":4435, "name":"eric fried"}';
console.log('jsonString', jsonString);
console.log('typeof jsonString', typeof jsonString);
const jsonObject = JSON.parse(jsonString);
console.log('jsonObject', jsonObject);
console.log('typeof jsonObject', typeof jsonObject);
