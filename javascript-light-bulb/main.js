const $lightmode = document.querySelector('.container');
const $lightmodebutton = document.querySelector('.circle');

$lightmodebutton.addEventListener('click', handleClick);

function handleClick(event) {
  if ($lightmode.className === 'container light') {
    $lightmode.className = 'container dark';
    $lightmodebutton.className = 'circle dark';
  } else {
    $lightmode.className = 'container light';
    $lightmodebutton.className = 'circle light';
  }
}
