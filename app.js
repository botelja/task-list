const taskInput = document.querySelector('#add-task');
const addBtn = document.querySelector('.button');
const tasks = document.querySelector('.task-collection');

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    addBtn.addEventListener('click', addTask);

    //Completed task
    tasks.addEventListener('click', checkTask);
}

//Add Task
function addTask() {

    if (taskInput.value === '') {
        alert('Add a task');
    }

    //Create li element
    const li = document.createElement('li');
    //Add a class
    li.className = 'task-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create a new link element
    const link = document.createElement('a');
    //Add a class
    link.className = 'check';
    //Add checkmark icon
    link.innerHTML = '<i class="fas fa-check"></i>';
    //Append link to li
    li.appendChild(link);
    //Append to ul
    tasks.appendChild(li);

    tasks.value = '';

}

function checkTask(e) {

    if (e.target.parentElement.classList.contains('check')) {
      e.target.parentElement.parentElement.classList.add('done');
    }
}