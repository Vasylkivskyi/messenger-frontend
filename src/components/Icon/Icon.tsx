import React from 'react';
import cc from 'classcat';
import './icon.scss';

// eslint-disable-next-line react/require-default-props
const Icon: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  <div className={cc(['icon-wrapper', className])}>
    <span className={cc(['material-icons', 'icon'])}>{name}</span>
  </div>
);

export default Icon;
