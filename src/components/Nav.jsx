import React from "react";
import classes from "../components/Styles/Nav.module.css";
import logo from "../assets/images/logo-fs.jpg";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Logo" />
            <h3>Learn With Fs Graphics</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
