const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const finishedList = document.getElementById("finishedList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("please write task");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const actionDiv = document.createElement("div");
  actionDiv.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";

  actionDiv.appendChild(editBtn);
  actionDiv.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(actionDiv);

  todoList.appendChild(li);

  taskInput.value = "";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      finishedList.appendChild(li);
    } else {
      todoList.appendChild(li);
    }
  });

  editBtn.addEventListener("click", function () {
    const newText = prompt("enter new task", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskSpan.textContent = newText.trim();
    }
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
});