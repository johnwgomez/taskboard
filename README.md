# **Task Board Project**

## **Challenge 5**

### **Project Overview**

This project is a simple task board (Kanban-style) application for task management using **HTML**, **CSS**, **JavaScript**, and the **Day.js** library. Tasks can be organized in three columns, and users can manage tasks by adding, dragging between progress states, and deleting tasks.

### **Features**

1. **Set Up the Task Board Layout**
   - Columns: Create three columns labeled **Not Yet Started**, **In Progress**, and **Completed** to organize tasks based on their progress.

2. **Add New Tasks**
   - Modal: Add an **"Add Task"** button that opens a modal where users can input:
     - **Task Title**
     - **Task Description**
     - **Deadline** (date input)
   - Save to **localStorage**: Ensure that when the user clicks **Save**, the task's info (title, description, deadline) is stored in localStorage

3. **Task Color Coding**
   - Use **Day.js** to calculate and color code tasks:
     - **Red**: Past due.
     - **Yellow**: Today dues.
     - **Default**: Future tasks.

4. **Enable Drag-and-Drop**
   - Implement a system where tasks can be dragged between columns.
   - Save task progress so that tasks remain in the updated after refreshing the page.

5. **Delete Functionality**
   - Add a delete button to each task. The task is removed from both the task board and localStorage.

6. **Task Persistence**
   - When the page loads, fetch and display tasks saved in localStorage.

### **Key Tasks**
- Create task board layout with three columns for task progress.
- Build a modal for adding new tasks and save tasks to localStorage.
- Use **Day.js** for task deadline color coding.
- Implement drag-and-drop functionality for moving tasks between columns and saving the updated state.
- Add a delete button to tasks and remove tasks from both the board and localStorage.

---

### **Issues**
- **Task Color Coding**: 
  - Had difficulties getting the correct color coding to display based on the task deadline. The task board is supposed to show:
    - **Red** for overdue tasks.
    - **Yellow** for tasks due today
    - No color for future tasks.
  -  **Day.js** and **Bootstrap's** color classes, Bootstrap classes (`bg-danger`, `bg-warning`).