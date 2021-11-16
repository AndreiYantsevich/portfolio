import React, { FC, memo } from "react";

import "./Topbar.scss";
import { Mail, Person } from "@material-ui/icons";

import Logo from "assets/logo.png";

type PropsType = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

const Topbar: FC<PropsType> = memo(({ menuOpen, setMenuOpen }) => (
  <div className={`${"topbar "} + ${menuOpen && "active"}`}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">
          <img src={Logo} alt="" />
        </a>
        <div className="itemContainer">
          <Person className="icon" />
          <span>+375 25 780 42 92</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>yantsevich92@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          role="presentation"
        >
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </div>
      </div>
    </div>
  </div>
));

export default Topbar;
