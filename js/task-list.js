function TaskList(){
    this.getListTask = function(){
        return axios({
            url: "https://6006de003698a80017de21fb.mockapi.io/api/todolist",
            method: "GET",
        });
    };
    this.addTask = function(task){
        return axios({
            url: "https://6006de003698a80017de21fb.mockapi.io/api/todolist",
            method: "POST",
            data: task,
        })
    };
    this.deleteTask = function(id){
        return axios({
            url: `https://6006de003698a80017de21fb.mockapi.io/api/todolist/${id}`,
            method: "DELETE",
        })
    };
    this.getTaskById = function(id){
        return axios({
            url: `https://6006de003698a80017de21fb.mockapi.io/api/todolist/${id}`,
            method: "GET",
        });
    }
    this.updateTask = function(id, task){
        return axios({
            url: `https://6006de003698a80017de21fb.mockapi.io/api/todolist/${id}`,
            method: "PUT",
            data: task,
        })
    }
}