/* exported todos */

let todos = [];
const previousTodosJson = localStorage.getItem('javascript-local-storage');

if (previousTodosJson !== null) {
  todos = JSON.parse(previousTodosJson);
}

window.addEventListener('beforeunload', handleUnload);

function handleUnload(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
