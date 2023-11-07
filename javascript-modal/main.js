const $modalStatus = document.querySelector('.modal-container');
const $button = document.querySelector('.open-button');
const $surveyButton = document.querySelector('.modal-button');

$surveyButton.addEventListener('click', handleModalClick);

function handleModalClick(event) {
  console.log('running handleModalClick');
  $modalStatus.className = 'hidden';
}

$button.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('running handleClick');
  $modalStatus.className = 'modal-container';
}
