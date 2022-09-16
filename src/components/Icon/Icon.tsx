import React from "react";
import cc from "classcat";
import { IconPropsType } from "../../types";
import "./icon.scss";

const Icon: React.FC<IconPropsType> = ({ name, className, onClick }) => (
  <div className={cc(["icon-wrapper", className])} onClick={onClick}>
    <span className={cc(["material-icons", "icon"])}>{name}</span>
  </div>
);

export default Icon;
