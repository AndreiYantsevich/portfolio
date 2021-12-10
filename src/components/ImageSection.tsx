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
        Now I am improving my skills in this direction and expanding them with
        new technologies. I&apos;m planing to study Node.js, because my next
        focus is to become a Full-Stack Developer. I spend my leisure time on
        Codewars or with educational books. Open for your suggestions.
      </p>
      <div className="about-details">
        <div className="left-section">
          <p>Full Name</p>
          <p>Age</p>
          <p>Languages</p>
          <p>Country</p>
        </div>
        <div className="right-section">
          <p>: Andrei Yantsevich</p>
          <p>: 29</p>
          <p>: English, Russian</p>
          <p>: Belarus</p>
        </div>
      </div>
      <button className="btn" type="button">
        Download CV
      </button>
    </div>
  </div>
));

export default ImageSection;
