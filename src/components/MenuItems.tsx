import React, {FC, memo} from 'react';

import {PortfolioType} from './All-Portfolios';

type PropsType = {
    menuItem: PortfolioType[];
};

const MenuItems: FC<PropsType> = memo(({menuItem}) => (
    <div className="portfolios">
        {menuItem.map(item => (
            <div className="portfolio" key={item.id}>
                <div className="image-data">
                    <img src={item.image} alt="image"/>
                    <ul className="hover-items">
                        <li className="items-container">
                            <a href={item.previewLink} className="item-description" target="_blank">Look preview</a>
                        </li>
                    </ul>
                </div>
                    <a href={item.link} target="_blank" className="item-link">
                        {item.title}
                    </a>
                <span>{item.tech}</span>
                <p>{item.placeholder}</p>
            </div>
        ))}
    </div>
));

export default MenuItems;
