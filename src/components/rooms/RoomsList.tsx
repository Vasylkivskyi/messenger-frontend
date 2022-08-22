import React from 'react';
import cc from 'classcat';
import Avatar from '../avatar/Avatar';
import './roomsList.scss';

type RoomType = {
  id: string;
  username: string;
  message: string;
};

type Rooms = Array<RoomType>;

const Room: React.FC<{ room: RoomType }> = ({ room }) => (
  <li className={cc({
    room: true,
    selected: room.id === '6',
  })}
  >
    <Avatar title={room.username.charAt(0).toUpperCase()} />
    <div className="room-data">
      <div className="username">{room.username}</div>
      <div className="message">{room.message}</div>
    </div>
  </li>
);

const RoomsList: React.FC<{ rooms: Rooms }> = ({ rooms }) => (
  <ul className="rooms">
    {rooms.map((r: RoomType) => <Room key={r.id} room={r} />)}
  </ul>
);

export default RoomsList;
