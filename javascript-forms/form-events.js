const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

$userEmail.addEventListener('input', handleInput);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('focus', handleFocus);

$userName.addEventListener('input', handleInput);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('focus', handleFocus);

$userMessage.addEventListener('input', handleInput);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('focus', handleFocus);

function handleFocus(event) {
  console.log('The focus event has fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('The blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}
