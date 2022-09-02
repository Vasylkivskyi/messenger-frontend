import React from 'react';
import './avatar.scss';

const Avatar: React.FC<{ title: string | undefined }> = ({ title }) => (
  <div className="avatar"><div className="wrapper"><div className="title">{title}</div></div></div>
);

export default Avatar;
