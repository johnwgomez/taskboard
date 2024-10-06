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
//https://www.w3schools.com/jquery/html_val.asp
//https://api.jquery.com/val/
function handleAddTask(event) {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Capture the values of the task title, description, and deadline from the form inputs
    const taskTitle = $("#task-title").val();
    const taskDescription = $("#task-desc").val();
    const taskDeadline = $("#task-deadline").val();

    // Validate the input to ensure all fields are filled
    if (taskTitle && taskDescription && taskDeadline) {
        // Create a new task object
        const newTask = {
            id: generateTaskId(),
            title: taskTitle,
            description: taskDescription,
            deadline: taskDeadline,
            status: "to-do" // default status
        };

        // Add the new task to the task list
        taskList.push(newTask);

        // Save the updated task list and nextId to localStorage
        localStorage.setItem("tasks", JSON.stringify(taskList));
        localStorage.setItem("nextId", nextId);

        // Re-render the task list with the new task
        renderTaskList();

        // Close the modal after task is added
        $('#formModal').modal('hide');
    } else {
        alert("Please fill out all fields");
    }
}
// When the page loads, add event listeners, and render tasks
$(document).ready(function () {
    // Add event listener to the form submission
    $("#task-form").on("submit", handleAddTask);

    // Render any existing tasks from localStorage
    renderTaskList();
}

// Todo: create a function to handle deleting a task
//https://developer.mozilla.org/en-US/docs/Web/API/Event/target
//https://www.w3schools.com/jquery/traversing_closest.asp

function handleDeleteTask(event) {
        // Get the task id from the clicked delete button's parent task card
        const taskId = $(event.target).closest('.task').data('id');

        // Filter out the task from the task list
        taskList = taskList.filter(task => task.id !== taskId);

        // Update the localStorage with the new task list
        localStorage.setItem("tasks", JSON.stringify(taskList));

        // Re-render the task list without the deleted task
        renderTaskList();
    }

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

    }

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    });
