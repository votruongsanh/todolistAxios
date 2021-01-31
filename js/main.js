var taskList = new TaskList();
var validation = new Validation();

function getListTask() {
    taskList.getListTask()
        .then(function (rs) {
            renderListTask(rs.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}
getListTask();

function renderListTask(arr) {
    var arrTodo = [];
    var arrDone = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].status === "todo") {
            arrTodo += createTable(arr[i]);
        } else {
            arrDone += createTable(arr[i]);
        }
    }
    getEle("todo").innerHTML = arrTodo;
    getEle("completed").innerHTML = arrDone;
}
function createTable(arr) {
    return `
        <li>
            <span>${arr.taskName}</span>
            <div class="buttons">
            <button class="remove" onclick="deleteToDo(${arr.id})">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete" onclick="changeStatus(${arr.id})">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
            </button>
            </div>
        </li>
        `;
}

function getEle(id) {
    return document.getElementById(id);
}
//add task
getEle("addItem").addEventListener("click", function () {

    //check rỗng và trùng
    var isValid = true;
    isValid &= validation.checkempty(newTask.value)
    //  && validation.checkTaskDuplicate(newTask.value, rs.data);
    if (!isValid) return;

    var task = layTinTask();
    taskList.addTask(task)
        .then(function (rs) {
            getListTask();
        })
        .catch(function (er) {
            console.log(err);
        })

});
function layTinTask() {
    var newTask = getEle("newTask").value;
    var status = "todo";
    var task = new Task(newTask, status);
    return task;
}
//delete task
function deleteToDo(id) {
    taskList.deleteTask(id)
        .then(function (rs) {
            getListTask();
        })
        .catch(function (er) {
            console.log(er);
        })
}
//change status
function changeStatus(id) {
    taskList.getTaskById(id)
        .then(function (rs) {
            console.log(rs.data);
            if (rs.data.status === "todo") {
                rs.data.status = "done";
            } else {
                rs.data.status = "todo";
            }
            updateTask(id, rs.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}
//update task
function updateTask(id, task) {
    taskList.updateTask(id, task)
        .then(function (rs) {
            getListTask();
        })
        .catch(function (err) {
            console.log(err);
        })
}