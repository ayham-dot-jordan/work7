const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
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

    taskInput.value = "";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    updateBtn.addEventListener("click", function () {
        const newValue = prompt("Enter new task", span.textContent);

        if (newValue !== null && newValue.trim() !== "") {
            span.textContent = newValue;
        }
    });
});