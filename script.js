const taskInput = document.querySelector('.input-container input[type="text"]');
const addTaskBtn = document.querySelector('.input-container button');
const taskList = document.querySelector('ol');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = ''; 
    }
});
