import React from 'react';
import './login.scss';
import logoIcon from '../../images/logo.webp';

const Login = () => (
  <div className="login-container">
    <div className="login-form">
      <img className="logo" src={logoIcon} alt="logo" />
      <h1>Sign in to Messenger App</h1>
      <h3>
        Please enter your nickname and
        enter your password to login.
      </h3>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button className="login-btn">Submit</button>
    </div>
  </div>
);

export default Login;
