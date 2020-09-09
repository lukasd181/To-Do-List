let todoList = [];
let todoInputObject = document.getElementById("todoInput");
let addButton = document.getElementById("addButton");

/**Event Listeners*/
addButton.addEventListener("mouseup", (event) => {
  addTodo();
  document.getElementById("todoInput").value = "";
});

todoInputObject.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTodo();
    document.getElementById("addButton").click();
    document.getElementById("todoInput").value = "";
  }
});

/**Functions*/
const writeTodo = () => {
  let todoString = todoList.reduce((totalString, todoItem, index) => {
    let todoObject = todoList[index];
    if (todoObject.isDone){
    totalString += `<li><button class="statusButton" onclick="doneToggle(${index})">Undone</button>${todoItem.content}<button class="removeButton" onclick="removeTask(${index})">Remove</button></li>`;
    return totalString;
    } else {
        totalString += `<li><button class="statusButton" onclick="doneToggle(${index})">Done</button>${todoItem.content}<button class="removeButton" onclick="removeTask(${index})">Remove</button></li>`;
    return totalString;

    }
  }, "");
  document.getElementById("resultArea").innerHTML = todoString;
};

const addTodo = () => {
  let todoObject = {
    content: "",
    isDone: false,
  };
  todoObject.content = document.getElementById("todoInput").value;
  todoList.push(todoObject);
  writeTodo("Remove");
};

const removeTask = (i) => {
    todoList.splice(i,1);
    writeTodo();
};

const doneToggle = (i) => {
    let todoObject = todoList[i];
    console.log(todoObject);
    if (todoObject.isDone) {
        todoObject.isDone = false;
    } else {
        todoObject.isDone = true;
    }
    writeTodo();
}
