import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo}) => (
  <div>
    <ul>
      {
        todos.map( (todo) => {
          return <TodoListItem key={todo.id} receiveTodo={receiveTodo} removeTodo={removeTodo} todo={todo}/>
        })
      }
    </ul>
    <TodoForm receiveTodo={receiveTodo}/>
  </div>
);

export default TodoList;
