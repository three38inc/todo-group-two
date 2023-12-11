
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
