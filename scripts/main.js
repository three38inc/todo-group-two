//array to store the tasks
let tasks = [];

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');

//Add function: To add value from the input field (start) 
addBtn.addEventListener('click',()=>{
    let inputValue = input.value;
    if(!inputValue){
        alert("No Task entered to add!");
        return;
    }
    tasks.push({
        id: tasks.length+1,
        task: inputValue,
        status: 'Pending'
    });
    input.value='';
    sortTasks();
})
//Add value from the input field (end)

//Display function: To display the rendered task in the Todo list (start)
function taskHtml(data){    
    return `
                <div id="${data.id}" class="row">
                    <div class="column1">${data.task}</div>
                    <div class="column2"><button class="status_button ${data.status}">${data.status}</button></div>
                    <div class="column3"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            `   
}
//display task in the Todo list (end)

//Toggle function: To toggle between completed and pending (start)
function toggle(event){
    const taskId = event.target.parentNode.parentNode.id;
    const task = tasks.find((element) => element.id == taskId);
    if(task){
        if(task.status === 'Completed'){
            task.status = "Pending";
        }else{
            task.status = "Completed";
        }
    }else{
        console.log("Task not found for ID",taskId);
    }
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
    statusButtons.forEach((button) => button.addEventListener('click', toggle) );
    //Adding event listeners for each status button (end)
}
// Sort Function (end)

//initial data load
sortTasks();



