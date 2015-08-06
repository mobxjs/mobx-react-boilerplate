var React = require('react');
var todoStore = require('./todostore');
var TodoList = require('./components').TodoList;

React.render(<TodoList store={todoStore} />, document.getElementById('approot'));
