const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload on form submission

  // create a new task
  const task = document.createElement('li');
  task.innerText = input.value;

  // add the task to the list
  ul.appendChild(task);

  // reset the input field
  input.value = '';
});

ul.addEventListener('click', (e) => {
  const task = e.target;

  if (task.tagName === 'LI') {
    task.classList.toggle('completed');
  }
});
