function handleClick(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log($taskListItem);
    $taskListItem.remove();
  }
}

const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);
