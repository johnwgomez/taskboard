# taskboard
Challenge 5
Task Board Project Notes

 Set Up the Task Board Layout
Columns: Need to create three columns labeled Not Yet Started, In Progress, and Completed for organizing tasks based on progress.

Add New Tasks
Modal: Add an “Add Task” button that opens a modal where users can input:
Task title
Task description
Deadline (date input)
Save to localStorage: Ensure when I click Save, the task’s info (title, description, deadline) is stored in localStorage to persist after refresh.

Task Color Coding
Use Day.js to calculate and color code tasks:
Yellow: Near the deadline.
Red: Overdue.

Enable Drag-and-Drop
Drag-and-Drop: Implement a system where tasks can be dragged between columns.
Save Progress: Ensure that when I move a task to another column, its state updates and this change is saved in localStorage for persistence.

Delete Functionality
Delete Button: Add a delete button to each task. When clicked, it should remove the task from the board.
Remove from localStorage: Make sure the task is also deleted from localStorage, so it’s gone for good after refreshing the page.

Task Persistence
Load Tasks from localStorage: When the page is loaded, fetch and display any tasks saved in localStorage in their appropriate columns.

Deployment
Deploy: Make sure the app is deployed to a live server (GitHub Pages, Netlify, Render, etc.). Test that it works without errors.

GitHub Repository
Unique Repo Name: Create a unique repo name related to the project.
Best Practices:
Keep file and folder structures organized and logical.
Follow proper naming conventions for classes and IDs.
Maintain consistent indentation and leave quality comments in the code.
Commit Messages: Use clear, descriptive commit messages to track progress (e.g., “Added drag-and-drop functionality”).
README: Write a solid README including:
Project description.
Screenshot of the task board.
Link to the live deployed app.
Installation instructions (if necessary).

Key Tasks
Create task board layout with three columns for progress.
Build modal for adding new tasks and save tasks to localStorage.
Use Day.js for task deadline color coding.
Implement drag-and-drop for moving tasks between columns and saving the updated state.
Add delete button to tasks and remove them from both the board and localStorage.
Ensure task persistence across page reloads.
Deploy the app and ensure it runs error-free on a live server.
Follow best practices in GitHub repo and commit history, and write a detailed README.
