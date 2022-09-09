import React from "react";
import cc from "classcat";
import "./icon.scss";
import { IconPropsType } from "../../types";

const Icon: React.FC<IconPropsType> = ({ name, className, onClick }) => (
  <div className={cc(["icon-wrapper", className])} onClick={onClick}>
    <span className={cc(["material-icons", "icon"])}>{name}</span>
  </div>
);

export default Icon;
