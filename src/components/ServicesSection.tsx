import React, { FC, memo } from "react";

type PropsType = {
  image: string;
  title: string;
  text: string;
};

const ServicesSection: FC<PropsType> = memo(({ image, title, text }) => (
  <div className="ServicesSection">
    <div className="service">
      <div className="service-content">
        <img src={image} alt="" />
        <h5 className="s-title">{title}</h5>
        <p className="s-text">{text}</p>
      </div>
    </div>
  </div>
));

export default ServicesSection;
