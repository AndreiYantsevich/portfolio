import React, { FC, memo } from "react";

import {
  faTelegram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomePage: FC = memo(() => (
  <div className="HomePage">
    <header className="hero">
      <div className="hero-text">
        <div className="text1">Hi, I&apos;m</div>
        <span className="text2"> Frontend Developer</span>
      </div>
      <p className="h-sub-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        facere, numquam vitae placeat consequatur corrupti officia quibusdam.
        Blanditiis doloremque nemo ex facilis neque. A sint ipsam earum nemo
        omnis et.
      </p>
      <div className="icons">
        <Link to="test" className="icon-holder">
          <FontAwesomeIcon icon={faTelegram} className="icon tg" />
        </Link>
        <Link to="test" className="icon-holder">
          <FontAwesomeIcon icon={faGithub} className="icon gh" />
        </Link>
        <Link to="test" className="icon-holder">
          <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
        </Link>
      </div>
    </header>
  </div>
));

export default HomePage;
