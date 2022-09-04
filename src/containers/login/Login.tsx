import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import './login.scss';

const API_URL = process.env.REACT_APP_API_URL;

type LoginTypeProps = {
  showRegister?: boolean
};

const Login: React.FC<LoginTypeProps> = ({ showRegister }) => {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hint, setHint] = useState<string>('');
  const navigate = useNavigate();

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        setHint(event.target.value);
    }
  }, []);

  const login = useCallback(() => {
    axios.post(`${API_URL}/api/user/login`, { username, password })
      .then(({ data }) => localStorage.setItem('token', data.token))
      .then(() => navigate('/'))
      .catch((e) => {
        const message = e.response?.data?.message || 'Something went wrong';
        setError(message);
      });
  }, [username, password, hint, navigate]);

  const register = useCallback(() => {
    axios.post(`${API_URL}/api/user/register`, { username, password, hint })
      .then(({ data }) => localStorage.setItem('token', data.token))
      .then(() => navigate('/'))
      .catch((e) => {
        const message = e.response?.data?.message || 'Something went wrong';
        setError(message);
      });
  }, [username, password, hint, navigate]);

  return (
    <div className="login-container">
      <div className="login-form">
        <Icon name="mark_email_unread" className="logo-wrapper" />
        <h1>
          Sign
          {' '}
          {showRegister ? 'up' : 'in'}
          {' '}
          to Messenger App
        </h1>
        {showRegister ? (
          <h3>
            Please enter your nickname ,password and password hint to register.
          </h3>
        ) : (
          <h3>
            Please enter your nickname and
            enter your password to login.
          </h3>
        )}
        <input type="text" placeholder="username" name="username" onChange={onChange} value={username} />
        <input type="password" placeholder="password" name="password" onChange={onChange} value={password} />
        {showRegister && <input type="text" placeholder="password hint" name="hint" onChange={onChange} value={hint} />}
        <button className="login-btn" onClick={showRegister ? register : login}>Submit</button>
        {!!error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
