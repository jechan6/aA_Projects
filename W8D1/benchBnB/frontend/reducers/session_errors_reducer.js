import {RECEIVE_SESSION_ERROR, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERROR:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
