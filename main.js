//array to store the tasks
let tasks = [];

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
let taskListContainer = document.getElementById('all_tasks')

//Display task in the Todo list
function display(){
    htmlString = '';

    tasks.forEach(element => {
        htmlString += `
            <div id="task-${element.id}" class="row">
                <div class="column1" style="text-transform:capitalize; font-weight:bold;">${element.task}</div>
                <div class="column2"><button class="status_button ${element.status}">${element.status}</button></div>
                <div class="column3"><i class="fa-solid fa-trash-can"></i></div>
            </div>
        `
    });
    
    taskListContainer.innerHTML = htmlString;
}

//Add value from the input field
addBtn.addEventListener('click',()=>{
    let inputValue = input.value;
    if(!input.value){
        alert("No value entered to add!");
        return;
    }
    tasks.push({
        id: tasks.length+1,
        task:inputValue,
        status: 'pending'
    });
    console.log(tasks);
    input.value='';
    display();

})