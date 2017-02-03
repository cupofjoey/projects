angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){
	$scope.helloConsole = dataService.helloConsole;

	$scope.learningNgChange = function() {
		console.log("Hello there, this is the Helloworld controller funcgtion, in the mainCtrl!")
	};

	

.controller('coolCtrl', function($scope, dataService){
	$scope.addTodo = function() {
		var todo = {name: "This is a new todo."}
		$scope.todos.push(todo);
	};

	$scope.whoAmI = function(){
		console.log("hello there, this is the coolCtrl function!")
	};

	$scope.helloWorld = dataService.helloWorld;

	dataService.getTodos(function(response){
		console.log(response.data);
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo, $index){
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
	};

	$scope.saveTodo = function(todo){
		dataService.saveTodo(todo);
	};

});

.service('dataService', function($http){

	this..helloConsole = function() {
		console.log("this is the hello console service!");
	};
	this.getTodos = function(callback){
		$http.get('mock/todos.json').then(callback)
				
	};


	this.deleteTodo = function(todo){
		console.log("the" + todo.name + " has been deleted!")
	};

	this.saveTodos = function(todo){
		console.log("the" + todo.name + " has been saved!")
	};

});	

