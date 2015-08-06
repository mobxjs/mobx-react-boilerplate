import React from 'react';
import {reactiveComponent} from 'mobservable';

// React component that responds to changes in 'todos'
export var TodoList = reactiveComponent(React.createClass({
	displayName: 'TodoList',

	render: function() {
		var store = this.props.store;
		return (<div>
			<ul>
				{ store.todos.map((todo, idx) =>
					(<TodoView store={ store } todo={ todo } key={ idx } />)
				) }
				{ store.pending ? (<li>Loading more items...</li>) : null }
			</ul>
			<hr/>
			Completed { store.completedCount } of { store.todos.length } items.<br/>
			<button onClick={ this.onNewTodo }>New Todo</button>
			<button onClick={ this.loadMore }>Load more...</button>
		</div>);
	},

	onNewTodo: function() {
		this.props.store.addTodo(prompt('Enter a new todo:', 'Try mobservable at home!'));
	},

	loadMore: function() {
		this.props.store.loadTodosAsync();
	}
}));

// React component that responds to changes in its 'todo'
var TodoView = reactiveComponent(React.createClass({
	displayName: 'TodoView',

	render: function() {
		var todo = this.props.todo;
		return (<li>
			<input type='checkbox' checked={ todo.completed } onChange={ this.onToggleCompleted } />
			{todo.title}{' '}
			<a href='#' onClick={ this.onEdit }>[edit]</a>
			<a href='#' onClick={ this.onRemove }>[remove]</a>
		</li>);
	},

	onToggleCompleted: function() {
		this.props.todo.completed = !this.props.todo.completed;
	},

	onEdit: function(e) {
		e.preventDefault();
		this.props.todo.title = prompt('Todo:', this.props.todo.title);
	},

	onRemove: function(e) {
		e.preventDefault();
		this.props.store.removeTodo(this.props.todo);
	}
}));
