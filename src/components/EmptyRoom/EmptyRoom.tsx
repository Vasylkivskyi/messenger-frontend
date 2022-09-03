import React from 'react';
import Icon from '../Icon/Icon';
import './emptyRoom.scss';

const EmptyRoom = () => (
  <div className="empty-room">
    <div className="content">
      <Icon name="notification_important" className="empty-page-icon-container" />
      <h1>Please chose a room!</h1>
    </div>
  </div>
);

export default EmptyRoom;
