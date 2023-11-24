// LoginForm.js

import React, { useState } from 'react';
import "./login.css"


const LoginForm = ({ startLogin }) => {
  // States for tracking form input which are the email address and password
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // onSubmit event handler of this form
  const handleLogin = (event) => {
    // Preventing default submission of the form to the action attribute URL
    event.preventDefault()

    const credentials = {
      email, password
    }

    // Calling startLogin with the provided credentials that will make a call to the backend
    startLogin(credentials)

    // Reset the form state, i.e. the text that's on the username and password text boxes to empty strings
    setEmail('')
    setPassword('')
  };

// const LoginForm = ({ handleLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     const credentials = {email , password};
//     console.log(`Logging in with username: ${email}, password: ${password}`);
//     // You may want to send an API request to authenticate the user

//     if (typeof handleLogin === 'function') {
//       // Call the handleLogin function to update the parent state
//       handleLogin(credentials);
//     } else {
//       console.error('handleLogin is not a function');
//     }
//     setEmail('')
//     setPassword('')
//   };

  return (
    <div className="login-form-container">
      <h2 className="login-heading">Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <label className="form-label">
          Email ID : 
          <input
            className="form-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your username"
          />
        </label>
        <label className="form-label">
          Password :
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
