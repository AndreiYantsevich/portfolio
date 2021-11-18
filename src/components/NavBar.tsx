import React, { FC, memo } from "react";

import { NavLink } from "react-router-dom";

import avatar from "assets/avatar.png";

type PropsType = {
  navToggle: boolean;
  setNavToggle: (value: boolean) => void;
};

const Navbar: FC<PropsType> = memo(({ navToggle, setNavToggle }) => (
  <div className="NavBar">
    <nav className="nav">
      <div className="profile">
        <img src={avatar} alt="" />
      </div>

      <ul className="nav-items">
        <li
          className="nav-item"
          onClick={() => setNavToggle(!navToggle)}
          role="presentation"
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => setNavToggle(!navToggle)}
          role="presentation"
        >
          <NavLink to="about">About</NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => setNavToggle(!navToggle)}
          role="presentation"
        >
          <NavLink to="portfolio">Portfolio</NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => setNavToggle(!navToggle)}
          role="presentation"
        >
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p>2021</p>
      </footer>
    </nav>
  </div>
));

export default Navbar;
