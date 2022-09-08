import React, { useCallback, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoggedContext } from '../../context';
import { HeaderPropsType } from '../../types';
import Icon from '../Icon/Icon';
import './header.scss';

const Header: React.FC<HeaderPropsType> = ({ roomName }) => {
  const navigate = useNavigate();
  const isLogged = useContext(LoggedContext);

  const logout = useCallback(() => {
    localStorage.setItem('token', '');
    navigate('/login');
  }, [navigate]);

  return (
    <div className="head">
      <div className="left">
        <Link to="/" className="header-logo-wrapper">
          <Icon name="mark_email_unread" className="header-logo-icon-wrapper" />
          <span className="logo-text">MessengerApp</span>
        </Link>
        {isLogged && (
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <Icon name="search" className="header-search-wrapper" />
        </div>
        )}
      </div>
      {isLogged && (
        <div className="right">
          <Icon name="3p" className="header-icon" />
          <div className="user-name">{roomName}</div>
          <Icon name="logout" className="header-logout" onClick={logout} />
        </div>
      )}
    </div>
  );
};

export default Header;
