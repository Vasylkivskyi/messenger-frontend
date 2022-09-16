import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { login, register } from "../../requests";
import "./login.scss";

type LoginTypeProps = {
  showRegister?: boolean;
};

const Login: React.FC<LoginTypeProps> = ({ showRegister }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        setName(event.target.value);
    }
  }, []);

  return (
    <div className="login-container">
      <div className="login-form">
        <Icon name="mark_email_unread" className="logo-wrapper" />
        <h1>Sign {showRegister ? "up" : "in"} to Messenger App</h1>
        {showRegister ? (
          <h3>Please enter your email, name, and password to register.</h3>
        ) : (
          <h3>Please enter your email and password to login.</h3>
        )}
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={onChange}
          value={email}
        />
        {showRegister && (
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={onChange}
            value={name}
          />
        )}
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={onChange}
          value={password}
        />
        <button
          className="login-btn"
          onClick={
            showRegister
              ? () =>
                  register({
                    name,
                    password,
                    email,
                    navigate,
                    setError,
                  })
              : () =>
                  login({
                    email,
                    password,
                    navigate,
                    setError,
                  })
          }
        >
          Submit
        </button>
        {!!error && <div className="error-message">{error}</div>}
      </div>
      <div className="bottom">
        {showRegister ? "Already have an account? " : "Don't have an account? "}
        <NavLink
          to={showRegister ? "/login" : "/register"}
          className="register-link"
        >
          {showRegister ? "Login" : "Register"}
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
