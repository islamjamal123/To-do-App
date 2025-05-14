function toggleMenu() {
    const sidebarSelect = document.querySelector('.sidebar');

    sidebarSelect.classList.toggle('active');
}

document.addEventListener('click', function(event) {

    const sideBarSelect = document.querySelector('.sidebar');
    const hamburgerButton = document.querySelector('.hamburger');

    if (!sideBarSelect.contains(event.target) && (!hamburgerButton.contains(event.target))) {
        sideBarSelect.classList.remove('active');
    } 
});

function topDropMenu() {
    const topMenuSelect = document.querySelector('.topmenu');

    topMenuSelect.classList.toggle('active');
}

document.addEventListener('click', function(event) {

    const topMenuSelect = document.querySelector('.topmenu');
    const topButton = document.querySelector('.top-button');

    if (!topMenuSelect.contains(event.target) && (!topButton.contains(event.target))) {
        topMenuSelect.classList.remove('active');
    } 
});

function toggleTaskInput(event) {
    const inputContainer = document.querySelector('.input-container');

    inputContainer.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const addTaskButton = document.querySelector('.addtask');
     const inputContainer = document.querySelector('.input-container');

     if (!addTaskButton.contains(event.target) && (!inputContainer.contains(event.target))) {
        inputContainer.classList.remove('active');
     }
});

function toggleInput() {
const taskInput = document.querySelector('.taskinput');
const textContainer = document.querySelector('.text-container');
const referenceNode = document.querySelector('.bodyheader');
const inputContainer = document.querySelector('.input-container');

    inputContainer.classList.remove('active');

    const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
    
    const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

    const newElement = document.createElement('p');
        newElement.textContent = taskInput.value;

        referenceNode.textContent = "Today";
        
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(newElement);

    const taskList = document.querySelector('.tasklist');

        taskList.appendChild(taskContainer);
       
        taskInput.value = '';
 
        checkbox.addEventListener('change', () => {
         const completedList = document.querySelector('.completedlist');
         const task = checkbox.parentElement;
         const completedHeader = document.querySelector('.completedheader');

            if (checkbox.checked) {
                completedList.appendChild(task);
                completedHeader.textContent = 'Completed';
            } else {
                taskList.appendChild(task);
            }

            
        });
}

