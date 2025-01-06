const taskInput = document.querySelector('.input-container input[type="text"]');
const addTaskBtn = document.querySelector('.input-container button');
const taskList = document.querySelector('ol');
const deleteListBtn = document.getElementById('deleteList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = ''; 
    }
});

deleteListBtn.addEventListener('click', function() {
    taskList.innerHTML = '';
});