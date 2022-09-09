import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icon from "../Icon/Icon";
import { getFilteredUserName } from "../../lib/helpers";
import { RoomsListType, RoomType } from "../../types";
import "./navigation.scss";
import EmptyPage from "../EmptyPage/EmptyPage";

const NavElement: React.FC<{ room: RoomType }> = ({ room }) => {
  const username = getFilteredUserName(room.users);
  return (
    <NavLink to={{ pathname: `/${username}` }} className="nav-link">
      <Icon name="face" className="nav-item-icon-wrapper" />
      <div className="room-data">
        <div className="username">{username}</div>
        <div className="message">
          {room.messages[room.messages.length - 1]?.text}
        </div>
      </div>
    </NavLink>
  );
};

const RoomsList: React.FC<{ rooms: RoomsListType }> = ({ rooms }) => {
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

export default RoomsList;
