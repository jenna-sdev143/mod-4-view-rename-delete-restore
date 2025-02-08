function addTodo() {
    let input = document.getElementById("todo-input");
    let task = input.value.trim();
    if (task === "") return;
    
    let list = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `<span class="todo-text">${task}</span> <button onclick="removeTodo(this)">X</button>`;
    list.appendChild(li);
    input.value = "";
}

function removeTodo(button) {
    button.parentElement.remove();
}
