import React from 'react';
import { withRouter, Link } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleInput(type) {
    return(e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleErrors() {

    const {errors } = this.props;
    return(
      <ul>
        {errors.session.map((err, idx) => (
          <li key={`err-${idx}`}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonTxt = this.props.formType === "signup" ? "Sign Up" : "Log In";
    let redirection = this.props.formType === "signup" ? "Log In" : "Sign Up";
    let linkToText = this.props.formType === "signup" ? "login" : "signup";
    const {formType} = this.props;
    return(
      <div>
        {this.handleErrors()}
        <h3>{buttonTxt}</h3>
        <Link to={`/${linkToText}`}>Go to {`${redirection}`}</Link>

        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.handleInput('username')}/>
          </label>
          <label>Password
            <input type="password" onChange={this.handleInput('password')}/>
          </label>
          <input type="submit" value={buttonTxt}/>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
