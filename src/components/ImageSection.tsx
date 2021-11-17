import React, { FC, memo } from "react";

import about from "assets/about.jpg";

const ImageSection: FC = memo(() => (
  <div className="ImageSection">
    <div className="img">
      <img src={about} alt="" />
    </div>
    <div className="about-info">
      <h4>
        I am<span> Frontend Developer</span>
      </h4>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        necessitatibus perferendis numquam dolorem cumque facilis. Desir per po
        la ta doso vi slone ve?
      </p>
      <div className="about-details">
        <div className="left-section">
          <p>Full Name</p>
          <p>Age</p>
          <p>Nationality</p>
          <p>Languages</p>
          <p>Address</p>
          <p>Country</p>
        </div>
        <div className="right-section">
          <p>: Andrei Yantsevich</p>
          <p>: 29</p>
          <p>: Belarus</p>
          <p>: English, Russian</p>
          <p>: Machulischi, Alexandrovo street, 4a</p>
          <p>: Belarus</p>
        </div>
      </div>
      <button className="btn" type="button">
        Download Cv
      </button>
    </div>
  </div>
));

export default ImageSection;
