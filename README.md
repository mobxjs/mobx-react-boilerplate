react-mobservable-boilerplate
=====================

A minimal application that combines Mobservable with React. Supports ES6 and JSX compilation through babel.

The boilerplate project contains a simple Todo application, based on the [5 minute introducton to Mobservable + React](mweststrate.github.io/mobservable/getting-started.html).


For a full TodoMVC implementation see the [mobservable-react-todomvc](https://github.com/mweststrate/mobservable-react-todomvc) project.

The Mobservable dev-tools are enabled by default. Disable them if needed in `src/index.js`.

### Run the example

```
npm install
npm start
open http://localhost:3000
```

The file `src/todos.js` provides a simple implementation of a todo list using observable data structures.
The file `src/components.js` defines the `TodoList` and `TodoView` components. Although dumb, they do respond to data changes automatically.
Changes to this file will be hot reloaded in the browser.


### Credits

* This template is based on [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) by Dan Abramov.
* [Mendix](http://github.com/mendix) for providing the opportunity to battle test this approach (we're hiring!).
