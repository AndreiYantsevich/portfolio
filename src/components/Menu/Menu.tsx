import React, { FC, memo } from "react";

import "./Menu.scss";

type PropsType = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

const Menu: FC<PropsType> = memo(({ menuOpen, setMenuOpen }) => (
  <div className={`${"menu "} + ${menuOpen && "active"}`}>
    <ul>
      <li onClick={() => setMenuOpen(false)} role="presentation">
        <a href="#intro">Home</a>
      </li>
      <li onClick={() => setMenuOpen(false)} role="presentation">
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={() => setMenuOpen(false)} role="presentation">
        <a href="#works">Works</a>
      </li>
      <li onClick={() => setMenuOpen(false)} role="presentation">
        <a href="#testimonials">Testimonials</a>
      </li>
      <li onClick={() => setMenuOpen(false)} role="presentation">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
));

export default Menu;
