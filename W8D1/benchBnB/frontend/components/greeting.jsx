import React from 'react';
import { Link } from 'react-router-dom';
const Greeting = ({currentUser, logout}) => {
  const loggedInGreeting = () => (

    <div>
      <h1>Hello {currentUser.username}</h1>
      <button onClick={logout}>Log Out</button>
    </div>

  )
  const otherGreeting = () => (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
  return currentUser ? loggedInGreeting() : otherGreeting()
};
export default Greeting;
