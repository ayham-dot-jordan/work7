const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

console.log("JavaScript file connected");

addBtn.addEventListener("click", function () {
    console.log("Add button clicked");

    const taskValue = taskInput.value.trim();
    console.log("Task value:", taskValue);

    if (taskValue === "") {
        console.log("Empty task was entered");
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskValue;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";

    const updateBtn = document.createElement("button");
    updateBtn.className = "update-btn";
    updateBtn.textContent = "Update";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    buttonsDiv.appendChild(updateBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonsDiv);

    taskList.appendChild(li);

    console.log("Task added:", taskValue);

    taskInput.value = "";

    deleteBtn.addEventListener("click", function () {
        console.log("Task deleted:", span.textContent);
        li.remove();
    });

    updateBtn.addEventListener("click", function () {
        const oldValue = span.textContent;
        const newValue = prompt("Enter new task", oldValue);

        if (newValue !== null && newValue.trim() !== "") {
            span.textContent = newValue;
            console.log("Task updated from:", oldValue, "to:", newValue);
        } else {
            console.log("Update cancelled or empty value entered");
        }
    });
});