import React from "react";
import { observer } from "mobx-react";

const Todo = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
));

export default Todo;
