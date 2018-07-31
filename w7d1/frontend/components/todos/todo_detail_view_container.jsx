import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {removeTodo} from '../../actions/todo_actions';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todoId) => dispatch(removeTodo(todoId))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
