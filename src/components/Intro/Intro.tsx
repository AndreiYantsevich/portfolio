import React, { FC, memo } from "react";

import ITyped from "react-ityped";

import Down from "../../assets/down.png";
import Photo from "../../assets/photo.png";
import "./Intro.scss";

const Intro: FC = memo(() => {
  const strings = ["Frontend Developer", "Content Creator", "Freelance"];

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Photo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I&#39;m</h2>
          <h1>Andrei Yantsevich</h1>
          <div>
            <ITyped
              className="ityped-cursor"
              showCursor={false}
              strings={strings}
              backSpeed={60}
              backDelay={1500}
            />
          </div>
        </div>
        <a href="#portfolio">
          <img src={Down} alt="" />
        </a>
      </div>
    </div>
  );
});

export default Intro;
