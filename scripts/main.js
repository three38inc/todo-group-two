//array to store the tasks
let tasks = [];

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');

//Add value from the input field (start) 
addBtn.addEventListener('click',()=>{
    let inputValue = input.value;
    if(!input.value){
        alert("No Task entered to add!");
        return;
    }
    tasks.push({
        id: tasks.length+1,
        task: inputValue,
        status: 'pending'
    });
    input.value='';
    displayAllTasks();
})
//Add value from the input field (end)

const taskListContainer = document.getElementById('all_tasks');

//Display fucntion to display the rendered task in the Todo list (start)
function displayAllTasks(){
    htmlString = '';
    
    tasks.forEach(element => {
        htmlString += `
            <div id="${element.id}" class="row">
                <div class="column1">${element.task}</div>
                <div class="column2"><button class="status_button ${element.status}">${element.status}</button></div>
                <div class="column3"><i class="fa-solid fa-trash-can" onclick=delete_row('${element.id}')></i></div>
            </div>
        `
    });
    
taskListContainer.innerHTML = htmlString;
   
}
//display task in the Todo list (end)


//Adding event listeners for each status button (start)
taskListContainer.addEventListener('click', function (event) {
if (event.target.classList.contains('status_button')) {
    const taskId = event.target.parentNode.parentNode.id;
const task = tasks.find( element => element.id == taskId )
if(task){
    toggle(event);
}
    
}
});
//Adding event listeners for each status button (end)

//Toggle function to toggle between completed and pending (start)
function toggle(event){
        if(event.target.classList.contains('completed'))
        {
            event.target.classList.remove('completed');
            event.target.classList.add('Pending');
            event.target.innerHTML="Pending";
        } else if(event.target.classList.contains('pending')){
            event.target.classList.remove('pending');
            event.target.classList.add('completed');
            event.target.innerHTML="Completed";
        }
    }
//Toggle function to toggle between completed and pending (end)

//function to delete the rows from the todo=list
function delete_row(id){
    tasks = tasks.filter(object => {
        return object.id != id;
    });
    const rowToRemove = document.getElementById(id);
    if (rowToRemove) {
        rowToRemove.parentElement.removeChild(rowToRemove);
    }
}





