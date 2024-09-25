import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { routes } from "../../routes";

export const Navbar = () => {
  return (
    <nav className={style.navBar}>
      {routes.map((item) => {
        return (
          item.isNavLink && (
            <NavLink key={item.title} to={item.link}>
              {item.title}
            </NavLink>
          )
        );
      })}
    </nav>
  );
};
