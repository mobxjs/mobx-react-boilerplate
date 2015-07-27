import React, { Component } from 'react';
import { addTodo, removeTodo } from './todos';
import { ObservingComponent } from 'mobservable'

// React component that responds to changes in 'todos'
@ObservingComponent export class TodoList extends Component {
	render() {
		const todos = this.props.todos;
		return (<div>
			<ul>
				 {this.props.todos.map((todo,idx) => (<TodoView todo={todo} key={idx} />))}
			</ul>
			<hr/>
			Completed {todos.filter(todo => todo.completed).length} of {todos.length} items.
			<br/><button onClick={this.onNewTodo.bind(this)}>New Todo</button>
		</div>);
	}

	onNewTodo() {
		addTodo(prompt("Enter a new todo:", "Try mobservable at home!"))
	}
}

// React component that responds to changes in its 'todo'
@ObservingComponent class TodoView extends Component {
	render() {
		const todo = this.props.todo;
		return (<li>
			<input type="checkbox" checked={todo.completed} onChange={this.onToggleCompleted.bind(this)} />
			{todo.title}{" "}
			<a href="#" onClick={this.onEdit.bind(this)}>[edit]</a>
			<a href="#" onClick={this.onRemove.bind(this)}>[remove]</a>
		</li>);
	}

	onToggleCompleted() {
		this.props.todo.completed = !this.props.todo.completed;
	}

	onEdit() {
		this.props.todo.title = prompt('Todo:', this.props.todo.title);
	}

	onRemove() {
		removeTodo(this.props.todo);
	}
}
