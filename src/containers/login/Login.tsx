import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { login, register } from "../../requests";
import "./login.scss";

type LoginTypeProps = {
  showRegister?: boolean;
};

const Login: React.FC<LoginTypeProps> = ({ showRegister }) => {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const navigate = useNavigate();

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        setHint(event.target.value);
    }
  }, []);

  return (
    <div className="login-container">
      <div className="login-form">
        <Icon name="mark_email_unread" className="logo-wrapper" />
        <h1>Sign {showRegister ? "up" : "in"} to Messenger App</h1>
        {showRegister ? (
          <h3>
            Please enter your nickname ,password and password hint to register.
          </h3>
        ) : (
          <h3>Please enter your nickname and enter your password to login.</h3>
        )}
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={onChange}
          value={username}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={onChange}
          value={password}
        />
        {showRegister && (
          <input
            type="text"
            placeholder="password hint"
            name="hint"
            onChange={onChange}
            value={hint}
          />
        )}
        <button
          className="login-btn"
          onClick={
            showRegister
              ? () =>
                  register({
                    username,
                    password,
                    navigate,
                    setError,
                    hint,
                  })
              : () =>
                  login({
                    username,
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
      <div>
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
