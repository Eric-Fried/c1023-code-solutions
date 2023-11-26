const intervalID = setInterval(countdown, 1000);
let n = 4;
function countdown() {
  const $countdown = document.querySelector('.countdown-display');
  console.dir($countdown);
  if (n > 1) {
    $countdown.textContent = n - 1;
    n--;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
