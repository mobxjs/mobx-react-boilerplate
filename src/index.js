import React from 'react';
import { todos } from './todos';
import { TodoList } from './components'

React.render(<TodoList todos={todos} />, document.getElementById('approot'));
