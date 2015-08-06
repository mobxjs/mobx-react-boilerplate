var mobservable = require('mobservable');

// Create a reactive data structure
var todoStore = mobservable.makeReactive({
	todos: [
		{
			title: "Find a clean mug",
			completed: true
		},
		{
			title: "Make coffee",
			completed: false
		}
	],
	completedCount: function() {
		return this.todos.filter(function(todo) { return todo.completed }).length;
	},
	pending: 0
});

todoStore.addTodo = function(title) {
	this.todos.push({
		title: title,
		completed: false
	});
}

todoStore.removeTodo = function(todo) {
	this.todos.splice(this.todos.indexOf(todo), 1);
}

todoStore.loadTodosAsync = function() {
	this.pending++;
	// mimic something asynchronous
	setTimeout(function() {
		this.addTodo("Asynchronously created todo");
		this.pending--;
	}.bind(this), 2000);
}

module.exports = todoStore;
