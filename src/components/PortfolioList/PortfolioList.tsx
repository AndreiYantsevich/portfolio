import React, { FC, memo } from "react";
import "./PortfolioList.scss";

type PropsType = {
  key: string;
  id: string;
  title: string;
  active: boolean;
  setSelected: (value: string) => void;
};

const PortfolioList: FC<PropsType> = memo(
  ({ title, active, setSelected, id }) => (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
      role="presentation"
    >
      {title}
    </li>
  )
);

export default PortfolioList;
