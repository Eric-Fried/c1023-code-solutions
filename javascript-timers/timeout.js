setTimeout(changeMessage, 2000);

function changeMessage() {
  const $message = document.querySelector('.message');
  console.dir($message);
  $message.textContent = 'Hello There';
}
