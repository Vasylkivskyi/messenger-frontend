import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import './navigation.scss';

type NavElementType = {
  id: string;
  username: string;
  message: string;
};

type NavigationType = Array<NavElementType>;

const NavElement: React.FC<{ room: NavElementType }> = ({ room }) => (
  <NavLink
    to={{ pathname: `/${room.username}` }}
    className="nav-link"
  >
    <Avatar title={room.username.charAt(0).toUpperCase()} />
    <div className="room-data">
      <div className="username">{room.username}</div>
      <div className="message">{room.message}</div>
    </div>
  </NavLink>
);

const RoomsList: React.FC<{ rooms: NavigationType }> = ({ rooms }) => (

  <nav className="nav">
    {rooms.map((r: NavElementType) => <NavElement key={r.id} room={r} />)}
    <Outlet />
  </nav>
);

export default RoomsList;
