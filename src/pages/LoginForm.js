// LoginForm.js

import React, { useState } from 'react';
import "./login.css"

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(`Logging in with username: ${username}, password: ${password}`);
    // You may want to send an API request to authenticate the user

    if (typeof handleLogin === 'function') {
      // Call the handleLogin function to update the parent state
      handleLogin();
    } else {
      console.error('handleLogin is not a function');
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-heading">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          User Name : 
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
