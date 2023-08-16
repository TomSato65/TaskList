const button = document.querySelector('.buttom-add-task');
const input = document.querySelector('.input-task');
const fullList = document.querySelector('.list-tasks');
let taskList = [];



function addNewTask() {
    taskList.push({
        taskName: input.value,
        taskcheck: false
    });
    showTask();
    input.value = '';
}

function showTask() {
    let newTask = '';

    taskList.forEach((itemtask, index) => {
        newTask = newTask + `
        
            <li class="task ${itemtask.taskcheck && "done"}">
                <img src="./img/checked.png" alt="Check-na-Tarefa" onclick="checktask(${index})">
                <p>${itemtask.taskName}</p>
                <img src="./img/trash.png" alt="Lixeira" onclick="deletetask(${index})">
            </li>
        
        `
    });

    fullList.innerHTML = newTask;

    localStorage.setItem('mytask', JSON.stringify(taskList));

}

function checktask(index) {
    taskList[index].taskcheck = !taskList[index].taskcheck;
    showTask();
    
}

function deletetask(index) {
    taskList.splice(index, 1);
    showTask();
}

function reloadtask() {
    const taskitemstorage = localStorage.getItem('mytask');
    if (taskitemstorage) {
        taskList = JSON.parse(taskitemstorage);
    }
    showTask();
}

reloadtask();
button.addEventListener('click', addNewTask);