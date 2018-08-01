import React from "react";
import merge from 'lodash/merge';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };
    this.updateTodo = this.updateTodo.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
  }

  changeDetail() {
    const newDetail = !this.state.detail;
    this.setState( {detail: newDetail} );
  }

  updateTodo(todo) {
    let newToDo = merge({},todo);
    newToDo.done = !newToDo.done;
    this.props.receiveTodo(newToDo);
  }

  doneText(status) {
    return status === true ? "Undo" : "Done";
  }

  render() {
    const todo = this.props.todo;
    const removeTodo = this.props.removeTodo;
    const receiveTodo = this.props.receiveTodo;
    let detailView = "";
    if (this.state.detail) {
      detailView = <TodoDetailView removeTodo={removeTodo} todo={todo}/>;
    }
    return (
      <div>
        <li onClick={this.changeDetail}>Title: {todo.title}
          <button onClick={()=>this.updateTodo(todo)}>{this.doneText(todo.done)}</button>
          {detailView}
        </li>
      </div>
    );
  }
}

export default TodoListItem;
