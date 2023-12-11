
// class TaskManager {
//   constructor() {
//       this.tasks = this.loadTasksFromLocalStorage(); 
//       this.input = document.getElementById('input');
//       this.addBtn = document.getElementById('addBtn');
//       this.taskListContainer = document.getElementById('all_tasks');

//       this.addBtn.addEventListener('click', this.addTask.bind(this));
//       this.taskListContainer.addEventListener('click', this.handleTaskListClick.bind(this));

//       this.sortTasks();
//   }

//   loadTasksFromLocalStorage() {
//       const storedTasks = localStorage.getItem('tasks');
//       return storedTasks ? JSON.parse(storedTasks) : [];
//   }

//   saveTasksToLocalStorage() {
//       localStorage.setItem('tasks', JSON.stringify(this.tasks));
//   }

//   addTask() {
//       const inputValue = this.input.value;
//       if (!inputValue) {
//           alert("No Task entered to add!");
//           return;
//       }

//       const newTask = {
//           id: this.tasks.length + 1,
//           task: inputValue,
//           status: 'Pending',
//       };

//       this.tasks.push(newTask);
//       this.saveTasksToLocalStorage();
//       this.input.value = '';
//       this.sortTasks();
//   }

//   handleTaskListClick(event) {
//       if (event.target.classList.contains('status_button')) {
//           this.toggleTaskStatus(event);
//       } else if (event.target.classList.contains('fa-trash-can')) {
//           const taskId = event.target.getAttribute('data-task-id');
//           if (taskId) {
//               this.deleteTask(taskId);
//           }
//       }
//   }

//   toggleTaskStatus(event) {
//       const taskId = event.target.parentNode.parentNode.id;
//       const task = this.tasks.find((element) => element.id == taskId);

//       if (task) {
//           task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
//           this.saveTasksToLocalStorage();
//           this.sortTasks();
//       }
//   }

//   deleteTask(taskId) {
//       this.tasks = this.tasks.filter(object => object.id != taskId);
//       const rowToRemove = document.getElementById(taskId);

//       if (rowToRemove && confirm("Are you sure?")) {
//           rowToRemove.parentElement.removeChild(rowToRemove);
//           this.saveTasksToLocalStorage();
//       }
//   }

//   sortTasks() {
//       let htmlString = '';
//       const pendingTasks = this.tasks.filter((element) => element.status !== 'Completed');
//       const completedTasks = this.tasks.filter((element) => element.status === 'Completed');

//       pendingTasks.forEach((task) => {
//           htmlString += this.taskHtml(task);
//       });

//       completedTasks.forEach((task) => {
//           htmlString += this.taskHtml(task);
//       });

//       this.taskListContainer.innerHTML = htmlString;
//   }

//   taskHtml(data) {
//       return `
//           <div id="${data.id}" class="row">
//               <div class="title_column">${data.task}</div>
//               <div class="status_column"><button class="status_button ${data.status}">${data.status}</button></div>
//               <div class="delete_column"><i class="fa-solid fa-trash-can" data-task-id="${data.id}"></i></div>
//           </div>
//       `;
//   }
// }

// // Create an instance of the TaskManager class
// const taskManager = new TaskManager();






class Task{
    // Properties
    id = null;
    task = "";
    status = null;

    // constructor
    constructor({id, task, status}){
        this.id =  id || new Date().getTime();
        this.task = task;
        this.status = status || 'Pending';
    }

    // methods
    toggleTaskStatus(){
        if(this.status === 'Completed'){
            this.status = 'Pending';
        }else{
            this.status = 'Completed';
        }
    }
  
}
