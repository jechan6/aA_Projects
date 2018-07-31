import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};
const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      const todos = {};
      action.todos.forEach(todo => {
        todos[todo.id] = todo;
      });
      return todos;
    case RECEIVE_TODO:
      let nextState = merge({}, state);
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      let newState = merge({}, state);
      delete newState[action.todoId];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
