let taskList = JSON.parse(localStorage.getItem("taskList") || []);

renderTask();
function renderTask() {
  let taskListHTML = ``;

  taskList.forEach(function (taskObject, index) {
    const { name: taskName, dueDate: taskDueDate } = taskObject;
    let html = `
    <div>${taskName}</div>
    <div>${taskDueDate}</div>
    <button class="delete-task-button" onclick="deleteTask(); renderTask();">Delete Task</button>`;
    taskListHTML += html;
  });

  // for (let index = 0; index < taskList.length; index++) {
  //   const taskObject = taskList[index];
  //   // const taskName = taskObject.name;
  //   // const taskDueDate = taskObject.dueDate;
  //   const { name: taskName, dueDate: taskDueDate } = taskObject;
  //   let html = `
  //   <div>${taskName}</div>
  //   <div>${taskDueDate}</div>
  //   <button class="delete-task-button" onclick="deleteTask(); renderTask();">Delete Task</button>`;
  //   taskListHTML += html;
  // }
  document.querySelector(".js-task-name").innerHTML = taskListHTML;
}

function addTask() {
  const inputElement = document.querySelector(".js-input-name");
  const dueDateElement = document.querySelector(".js-due-date-input");
  const taskNameValue = inputElement.value.trim();
  const dueDateValue = dueDateElement.value;
  if (!taskNameValue || !dueDateValue) {
    alert("Please enter both task name and due date!");
  } else {
    taskList.push({
      name: taskNameValue,
      dueDate: dueDateValue,
    });
  }
  inputElement.value = "";
  dueDateElement.value = "";
  localStorage.setItem("taskList", JSON.stringify(taskList));
  renderTask();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  renderTask();
}

console.log();
