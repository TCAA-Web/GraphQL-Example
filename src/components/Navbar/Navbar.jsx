import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../navlinks";

export const Navbar = () => {
  return (
    <nav>
      {navLinks.map((item) => {
        return (
          <NavLink key={item.title} to={item.link}>
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};
