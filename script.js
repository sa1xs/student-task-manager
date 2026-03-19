const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Escribe una tarea");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  taskList.appendChild(li);
  taskInput.value = "";
});