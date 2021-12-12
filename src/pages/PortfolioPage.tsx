import React, {FC, memo, useState} from 'react';

import portfolios from '../components/All-Portfolios';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Tittle from '../components/Tittle';

const PortfolioPage: FC = memo(() => {
    const [menuItems, setMenuItems] = useState(portfolios);

    const allCategories = [
        'All',
        ...new Set(portfolios.map((item) => item.category)),
    ];

    const filter = (category): void => {
        if (category === 'All') {
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
                <Tittle title="My Portfolio" span="portfolio"/>
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={allCategories}/>
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    );
});

export default PortfolioPage;
