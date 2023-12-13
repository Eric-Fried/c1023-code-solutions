let characterCount = 0;

const $phrase = document.querySelectorAll('span');
document.addEventListener('keydown', handleKeyDown);

console.log($phrase[0]);
console.dir($phrase[0]);
console.log($phrase[1]);
console.log($phrase[2]);

function handleKeyDown(event) {
  console.log($phrase[characterCount]);
  if ($phrase[characterCount].textContent === event.key) {
    $phrase[characterCount].className = 'green';
    characterCount++;
  } else if ($phrase[characterCount].textContent !== event.key) {
    $phrase[characterCount].className = 'red';
  }
}
