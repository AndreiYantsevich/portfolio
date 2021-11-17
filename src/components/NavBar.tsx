import React, { FC, memo } from "react";

import { NavLink } from "react-router-dom";

import avatar from "assets/avatar.png";

const Navbar: FC = memo(() => (
  <div className="NavBar">
    <nav className="nav">
      <div className="profile">
        <img src={avatar} alt="" />
      </div>

      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios">Portfolios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p>@Yantsevich 2021</p>
      </footer>
    </nav>
  </div>
));

export default Navbar;
