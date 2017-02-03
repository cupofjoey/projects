//Problem: User interaction doesn't provide desired results
//Solution: Add Interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); //newTask
var addButton = document.getElementsByTagName("button")[0]; //first button on page
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add Tasks
var createNewTaskElement = function (taskString) {
	var listItem = document.createElement("li");
			//input checkbox
			var checkBox = document.createElement("input");
			//label
			var label = document.createElement("label");
			//input (text)
			var editInput = document.createElement("input");
			//button.edit
			var editButton = document.createElement("button");
			//button.delete
			var deleteButton = document.createElement("button");
			//Each of these elements will need to be modified and appended

			checkBox.type = "checkbox";
			editInput.type = "text";
			editButton.innerText = "Edit";
			editButton.className = "edit";
			deleteButton.innerText = "Delete";
			deleteButton.className = "delete";


			listItem.appendchild(checkbox);
			listItem.appendchild(label);
			listItem.appendchild(editInput);
			listItem.appendchild(editButton);
			listItem.appendchild(deleteButton);
			return listItem;
}


var addTask = function () {
	console.log("Add task...")
		//Create a new list item with the text from #new-task:
		var listItem = createnewTaskElement(taskInput.value);
		incompleteTaskHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted);
		//clear input when it is entered
		taskInput.value = "";
}


//Edit an existing task
var editTask = function () {
	console.log("Edit task...")
	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input [type=text]");

	var containsClass = listItem.classList.contains("editMode");
	var label = listItem.querySelector("label");
		//if the class of the parent is .editMode
		if(containsClass) {
			label.innerText = editInput.value;
		}else{
			editInput.value = label.innerText;
		}
			
		listItem.classList.toggle("editMode");

}


//Delete an existing task
var deleteTask = function() {
	console.log("Delete task...")
		//Remove the parent list item from the ul
		var listItem - this.parentNode;
		var ul = listItem.parentNode;
		ul.removeChild(listItem);
}



//Mark a task as complete
var taskCompleted = function (){
	console.log("Task Complete...")

	//When the check box is checked
		//Append the task list item to the #completed-tasks
		var listItem = this.parentNode;
		completedTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskIncomplete);
}



//Mark a task as incomplete
var taskIncomplete = function () {
	console.log("Task Incomplete...")
	//When the checkbox is unchecked
	var listItem = this.parentNode;
		//Append the task to the #incomplete-tasks}
		incompleteTaskHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	//select it's children
	var checkBox = taskListItem.querySelector("input [type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

		//bind editTask to editButton
		editButton.onclick = editTask;
		//bind deletTask to delete button
		deleteButton.onclick = deleteTask;
		//bind taskCompleted to checkbox
		checkbox.onchange = checkBoxEventHandler;
}
var ajaxRequest = function(){
	console.log("ajaxRequest");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);





//cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTaskHolder.children.length; i++) {
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}
	//for each list item
		// bind events to list itm's children (taskCompleted)

		//cycle over completeTaskHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
	//for each list item
		// bind events to list itm's children (taskIncomplete)














