import React from 'react';
import todoStore from './todostore';
import {TodoList} from './components';

React.render(<TodoList store={todoStore} />, document.getElementById('approot'));
