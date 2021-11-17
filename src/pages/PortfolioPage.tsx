import React, { FC, memo, useState } from "react";

import portfolios from "../components/Allportfolios";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import Tittle from "../components/Tittle";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

const PortfolioPage: FC = memo(() => {
  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category): void => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter(
      (item) => item.category === category
    );
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Tittle title="My Portfolio" span="portfolios" />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
});

export default PortfolioPage;
