//array with todo's

var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

//function to change todos

function displayTodos(){
	console.log('My Todos:', todos);
}

//function to add new todo

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// function to change a todo

function changeTodo(position, newValue){
	todos[position] = newValue;
	displayTodos();
}

//function to delete a todo

function deleteTodo(postion){
	todos.splice(postion, 1);
	displayTodos();
}

