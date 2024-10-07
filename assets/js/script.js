// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Todo: create a function to generate a unique task id 
function generateTaskId() {
    return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const colorClass = getColorCode(task.deadline); // Get the color class based on the deadline
    return `
    <div class="task card mb-3 ${colorClass}" data-id="${task.id}">
      <div class="card-body">
        <h5 class="card-title">${task.title}</h5>
        <p class="card-text">${task.description}</p>
        <p class="card-text"><small class="text-muted">Due: ${task.deadline}</small></p>
        <button class="btn btn-danger btn-sm delete-task">Delete</button>
      </div>
    </div>
  `;
}

// Function to get color based on task deadline // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function getColorCode(deadline) {
    const today = dayjs();
    const dueDate = dayjs(deadline);
    const diff = dueDate.diff(today, 'day');

// https://getbootstrap.com/docs/5.2/utilities/background/
    if (diff < 0) {
        return 'bg-danger'; // Red for overdue tasks
    } else if (diff <= 3) {
        return 'bg-warning'; // Yellow for tasks due today
    } else {
        return ''; // default for future task
    }
}

// Todo: create a function to render the task list and make cards draggable
// Function to render the task list and make cards draggable
function renderTaskList() {
    // Clear out the current task display //https://api.jquery.com/empty/
    $("#todo-cards").empty();
    $("#in-progress-cards").empty();
    $("#done-cards").empty();

    taskList.forEach(task => {
        const taskCard = createTaskCard(task);
        if (task.status === 'to-do') {
            $("#todo-cards").append(taskCard);
        } else if (task.status === 'in-progress') {
            $("#in-progress-cards").append(taskCard);
        } else if (task.status === 'done') {
            $("#done-cards").append(taskCard);
        }
    });

    // Make all tasks draggable
    $(".task").draggable({
        revert: "invalid" // Revert if not dropped in a valid lane
    });

    // Bind delete task functionality
    $(".delete-task").on("click", handleDeleteTask);
}

// Todo: create a function to handle adding a new task
//https://www.w3schools.com/jquery/html_val.asp
//https://api.jquery.com/val/
function handleAddTask(event) {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Capture the values of the task title, description, and deadline from form inputs
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
            status: "to-do"
        };

        // Add the new task to the task list
        taskList.push(newTask);

        // Save the updated task list and next to localStorage
        localStorage.setItem("tasks", JSON.stringify(taskList));
        localStorage.setItem("nextId", nextId);

        // render the task list 
        renderTaskList();

        // Close the modal after 
        $('#formModal').modal('hide');
    } else {
        alert("Please fill out all fields");
    }
}

// Todo: create a function to handle deleting a task
//https://developer.mozilla.org/en-US/docs/Web/API/Event/target
//https://www.w3schools.com/jquery/traversing_closest.asp

function handleDeleteTask(event) {
    // Get the task id from the clicked delete button
    const taskId = $(event.target).closest('.task').data('id');

    // Filter out the task list
    taskList = taskList.filter(task => task.id !== taskId);

    // Update the localStorage with the new task list
    localStorage.setItem("tasks", JSON.stringify(taskList));

    // Re-render the task list without the deleted task
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // Get the task ID of the dragged task
    const taskId = ui.draggable.data("id");

    // Get the new status from the droppable area
    // https://api.jqueryui.com/droppable/

    const newStatus = $(event.target).attr('id');

    // Find the task in the taskList and update status
    const task = taskList.find(task => task.id === taskId);
    if (task) {
        task.status = newStatus;
    }

    // Save the updated task list to localStorage
    localStorage.setItem("tasks", JSON.stringify(taskList));

    // Re-render the task list with the new status
    renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Add event listener to the form submission
    $("#task-form").on("submit", handleAddTask);

    // Render any existing tasks from localStorage
    renderTaskList();

    // Make the task lanes droppable and bind the handleDrop function
    $(".lane").droppable({
        drop: handleDrop
    });

    // Make the task cards draggable https://jqueryui.com/draggable/
    $(".task").draggable({
        revert: "invalid" // Revert the task back to original position if not dropped in a valid lane
    });
});