const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = taskText;
    taskList.appendChild(li);

    taskInput.value = "";
  }
})