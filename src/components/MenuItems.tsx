import React, { FC, memo } from "react";

import { PortfolioType } from "./Allportfolios";

type PropsType = {
  menuItem: PortfolioType[];
};

const MenuItems: FC<PropsType> = memo(({ menuItem }) => (
  <div className="portfolios">
    {menuItem.map((item) => (
      <div className="portfolio" key={item.id}>
        <div className="image-data">
          <img src={item.image} alt="" />
          <ul className="hover-items">
            <li>
              <a href={item.link1}>{item.icon1}</a>
              <a href={item.link2}>{item.icon2}</a>
            </li>
          </ul>
        </div>
        <h5>{item.title}</h5>
        <p>Placeholder paragraph</p>
      </div>
    ))}
  </div>
));

export default MenuItems;
