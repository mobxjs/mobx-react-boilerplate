import React from 'react';
import todoStore from './todostore';
import {TodoList} from './components';

// uncomment next line to enable the dev-tools.
import 'mobservable-react-devtools';

React.render(<TodoList store={todoStore} />, document.getElementById('approot'));
