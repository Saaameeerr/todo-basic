const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const clearTodoBtn = document.getElementById('clearTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click',addTodo);
todoInput.addEventListener('keypress',function (e){
  if (e.key === 'Enter'){
    addTodo()
  }
});

clearTodoBtn.addEventListener('click',clearTodos);
function clearTodos() {
  todoList.innerHTML = '';
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const listItem = document.createElement('li')
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}