import {connect} from 'react-redux';
import {signup} from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
