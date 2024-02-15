// Array para almacenar las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

// Función para renderizar las tareas en la lista
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        taskItem.className = 'task-item';
        taskItem.setAttribute('onclick', `removeTask(${index})`);
        taskList.appendChild(taskItem);
    });
}

// Función para eliminar una tarea
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Renderizar tareas iniciales
renderTasks();
