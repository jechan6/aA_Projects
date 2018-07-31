import React from 'react';

const TodoDetailView = ({removeTodo, todo}) => (
  <ul>
    <li>Body: {todo.body}
      <button onClick={()=>removeTodo(todo.id)}>Delete</button>
    </li>
  </ul>
);

export default TodoDetailView;
