import React from "react";
import { NavLink } from "react-router-dom";
import style from "./StyledLink.module.scss";

export const StyledLink = ({ link, title }) => {
  return (
    <NavLink to={link} className={style.linkStyle}>
      {title}
    </NavLink>
  );
};
