document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
