import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

function Header() {
  return (
    <div className={css.header}>
      <div className={css.navigation}>
        <div className={css.logo}>
          <p>Baduk Master</p>
        </div>
        <div className={css.menu}>
          <NavLink to="/main" activeClassName={css.active_link}>
            Main
          </NavLink>
          <NavLink to="/joseki" activeClassName={css.active_link}>
            Joseki
          </NavLink>
          <NavLink to="/tsumego" activeClassName={css.active_link}>
            Tsumego
          </NavLink>
          <NavLink to="/about" activeClassName={css.active_link}>
            About
          </NavLink>
        </div>
        <div className={css.login}>
          <p>Sign In</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
