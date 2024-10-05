// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Todo: create a function to generate a unique task id 
function generateTaskId() {
    return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    return `
    <div class="task card mb-3" data-id="${task.id}">
      <div class="card-body">
        <h5 class="card-title">${task.title}</h5>
        <p class="card-text">${task.description}</p>
        <p class="card-text"><small class="text-muted">Due: ${task.deadline}</small></p>
        <button class="btn btn-danger btn-sm delete-task">Delete</button>
      </div>
    </div>
  `;
}

// Todo: create a function to render the task list and make cards draggable
//https://www.w3schools.com/jquery/event_preventdefault.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

function renderTaskList(event) {
    event.preventDefault();

    const taskTitle = $("#task-title").val();
    const taskDescription = $("#task-desc").val();
    const taskDeadline = $("#task-deadline").val();

    if (taskTitle && taskDescription && taskDeadline) {
        const newTask = {
            id: generateTaskId(),
            title: taskTitle,
            description: taskDescription,
            deadline: taskDeadline,
            status: "to-do" // need to default to status
        };

        taskList.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        localStorage.setItem("nextId", nextId);

        renderTaskList(); //render the task list with the new task
        $('#formModal').modal('hide'); // Close the modal after task is added
    }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
