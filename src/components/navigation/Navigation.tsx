import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icon from "../Icon/Icon";
import { getFilteredUserName } from "../../lib/helpers";
import { NavElementType, NavigationType, RoomType } from "../../types";
import EmptyPage from "../EmptyPage/EmptyPage";
import "./navigation.scss";

const NavElement: React.FC<NavElementType> = ({ room }) => {
  const { name: username, email } = getFilteredUserName(room.members);
  return (
    <NavLink to={{ pathname: `/${username}` }} className="nav-link">
      <Icon name="face" className="nav-item-icon-wrapper" />
      <div className="room-data">
        <div className="username">{username}</div>
        <div className="email">{email}</div>
      </div>
    </NavLink>
  );
};

const Navigation: React.FC<NavigationType> = ({ rooms }) => {
  if (!rooms.length) return <EmptyPage />;
  return (
    <nav className="nav">
      {rooms.map((r: RoomType) => (
        <NavElement key={r._id} room={r} />
      ))}
      <Outlet />
    </nav>
  );
};

export default Navigation;
