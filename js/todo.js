const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS = "todos";
let toDos = [];
const savedValue = localStorage.getItem(TODOS);

todoForm.addEventListener("submit", handleToDoSubmit);

function saveToDos() {
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function printList(newListValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const div = document.createElement("div");
  li.id = newListValue.id;
  span.innerHTML = newListValue.text;
  button.innerHTML = "🧨";
  button.addEventListener("click", deleteListValue);
  div.appendChild(span);
  div.appendChild(button);
  li.appendChild(div);
  todoList.appendChild(li);
}

function deleteListValue(event) {
  const deleteList = event.target.parentElement;
  deleteList.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteList.id));
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const listValue = todoInput.value;
  todoInput.value = "";
  const newListValue = {
    text: listValue,
    id: Date.now(),
  };
  toDos.push(newListValue);
  printList(newListValue);
  saveToDos();
}

if (savedValue !== null) {
  const parsedToDo = JSON.parse(savedValue);
  toDos = parsedToDo;
  parsedToDo.forEach(printList);
}
