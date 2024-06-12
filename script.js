const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  try {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      tasks.push(taskText);
      renderTaskList();
      taskInput.value = '';
    }
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const newTaskListItem = document.createElement('li');
    newTaskListItem.innerHTML = `<span>${task}</span>`;
    taskList.appendChild(newTaskListItem);
  });
}

// Error handling
try {
  // Code to run
} catch (error) {
  console.error('Error:', error);
}

// User input validation
const taskText = taskInput.value.trim();
if (taskText === '') {
  alert('Please enter a task');
  return;
}

// Task editing and deletion
const editTaskBtn = document.getElementById('edit-task-btn');
const deleteTaskBtn = document.getElementById('delete-task-btn');

editTaskBtn.addEventListener('click', editTask);
deleteTaskBtn.addEventListener('click', deleteTask);

function editTask() {
  // Code to edit task
}

function deleteTask() {
  // Code to delete task
}

// Keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    // Code to navigate up
  } else if (event.key === 'ArrowDown') {
    // Code to navigate down
  }
});
console.log("JavaScript is working!");

const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});
let currentTaskIndex = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    if (currentTaskIndex > 0) {
      currentTaskIndex--;
      taskInput.value = tasks[currentTaskIndex];
    }
  } else if (event.key === 'ArrowDown') {
    if (currentTaskIndex < tasks.length - 1) {
      currentTaskIndex++;
      taskInput.value = tasks[currentTaskIndex];
    }
  }
});
function editTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
      tasks[index] = taskText;
      renderTaskList();
      taskInput.value = '';
    }
  }
}

function deleteTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
      tasks.splice(index, 1);
      renderTaskList();
      taskInput.value = '';
    }
  }
}





document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    if (currentTaskIndex > 0 && currentTaskIndex <= tasks.length) {
      currentTaskIndex--;
      taskInput.value = tasks[currentTaskIndex];
    }
  } else if (event.key === 'ArrowDown') {
    if (currentTaskIndex >= 0 && currentTaskIndex < tasks.length - 1) {
      currentTaskIndex++;
      taskInput.value = tasks[currentTaskIndex];
    }
  }
});
function saveTasksToLocalStorage() {
  const tasksJSON = JSON.stringify(tasks);
  localStorage.setItem('tasks', tasksJSON);
}

function getTasksFromLocalStorage() {
  const tasksJSON = localStorage.getItem('tasks');
  tasks = JSON.parse(tasksJSON) || [];
}
function filterTasks(searchText) {
  const filteredTasks = tasks.filter((task) => task.includes(searchText));
  renderTaskList(filteredTasks);
}
function updateTaskPriority(task, priority) {
  const index = tasks.indexOf(task);
  tasks[index] = { text: task, priority };
  saveTasksToLocalStorage();
  renderTaskList();
}
function authenticateUser() {
  // Authenticate user using Firebase or another library
  // ...
}

function saveTasksPerUser() {
  const userId = authenticateUser();
  const tasksJSON = JSON.stringify(tasks);
  localStorage.setItem(`tasks-${userId}`, tasksJSON);
}

function getTasksPerUser() {
  const userId = authenticateUser();
  const tasksJSON = localStorage.getItem(`tasks-${userId}`);
  tasks = JSON.parse(tasksJSON) || [];
}
