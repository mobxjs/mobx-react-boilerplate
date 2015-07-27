react-mobservable-boilerplate
=====================

A minimal todo application, that uses reactive data structures and components that observe their data.
Powered by [mobservable](http://mweststrate.github.io/mobservable).

### Run the example

```
npm install
npm start
open http://localhost:3000
```

The file `src/todos.js` provides a simple implementation of a todo list using observable data structures.
The file `src/components.js` defines the `TodoList` and `TodoView` components. Although dumb, they do respond to data changes automatically. Changes to this file will be hot reloaded in the browser.

### Credits

* This template is based on [react-mobservable-boilerplate](https://github.com/gaearon/react-hot-boilerplate) by Dan Abramov.
* [Mendix](http://github.com/mendix) for providing the opportunity to battle test this approach (we're hiring!).
