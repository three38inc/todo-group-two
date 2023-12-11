//continues data storage to localStorage
//to check if localStorage is already set with key tasks
let tasks=localStorage.getItem('tasks')

if(!tasks){
    tasks=[]
    localStorage.setItem('tasks',JSON.stringify(tasks))
} else {
    tasks=JSON.parse(tasks)
    tasks = tasks.map(taskObject => {
        return new Task(taskObject);
    })
    console.log(tasks);

}

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');

//Add function: To add value from the input field (start) 
addBtn.addEventListener('click',()=>{
    let inputValue = input.value;
    if(!inputValue){
        alert("No Task entered to add!");
        return;
    }
    const task = new Task({task : inputValue});
    tasks.push(task);

    saveTaskToLocalStorage()
    input.value='';
    sortTasks();
})
//Add value from the input field (end)

//Display function: To display the rendered task in the Todo list (start)
function taskHtml(data){ 
    return `
                <div id="${data.id}" class="row">
                    <div class="title_column">${data.task}</div>
                    <div class="status_column"><button class="status_button ${data.status}">${data.status}</button></div>
                    <div class="delete_column"><i class="fa-solid fa-trash-can" data-task-id="${data.id}"></i></div>
                    
                </div>
            `   
}
//display task in the Todo list (end)

//Toggle function: To toggle between completed and pending (start)
function toggle(event){
    const taskId = event.target.parentNode.parentNode.id;
    const task = tasks.find((element) => element.id == taskId);
    if(task){
        task.toggleTaskStatus();
    }else{
        console.log("Task not found for ID",taskId);
    }
    saveTaskToLocalStorage()
    sortTasks();
}
//Toggle function to toggle between completed and pending (end)

// Sort Function: To sort based on task status (start)
function sortTasks(){
    let htmlString = '';
    const taskListContainer = document.getElementById('all_tasks');

    const pendingTasks = tasks.filter((element) => element.status !== 'Completed');
    const completedTasks = tasks.filter((element) => element.status === 'Completed');

    pendingTasks.forEach((task)=>{
        htmlString += taskHtml(task);
    });

    completedTasks.forEach((task)=>{
        htmlString += taskHtml(task);
    });

    taskListContainer.innerHTML = htmlString;

    //Adding event listeners for each status button (start)
    const statusButtons = document.querySelectorAll('.status_button');
    statusButtons.forEach((button) => button.addEventListener('click', toggle));
    //Adding event listeners for each status button (end)
}
// Sort Function (end)

//function to store the tasks value to localStorage
function saveTaskToLocalStorage(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}


//function to delete the rows from the todo-list
function delete_row(id){
    tasks = tasks.filter(object => {
        return object.id != id;
    });
    const rowToRemove = document.getElementById(id);
    if (rowToRemove && confirm("Are you sure ?")) {
        rowToRemove.parentElement.removeChild(rowToRemove);
    }
    saveTaskToLocalStorage();
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-trash-can')) {
        const taskId = event.target.getAttribute('data-task-id');
        if (taskId) {
            delete_row(taskId);
        }
    }
});


//initial data load
sortTasks();