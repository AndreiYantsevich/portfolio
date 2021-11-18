import React, { FC, memo } from "react";

import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage: FC = memo(() => (
  <div className="HomePage">
    <header className="hero">
      <div className="hero-text">
        <div className="text1">Hi, I&apos;m</div>
        <span className="text2"> Andrei Yantsevich</span>
      </div>
      <p className="h-sub-text">
        I am a person who has a strong passion for programming. I have
        experience in creating SPA with React/Redux/TypeScript.
      </p>
      <div className="icons">
        <a href="https://t.me/yantsev1ch" className="icon-holder">
          <FontAwesomeIcon icon={faTelegram} className="icon tg" />
        </a>
        <a href="https://github.com/AndreiYantsevich" className="icon-holder">
          <FontAwesomeIcon icon={faGithub} className="icon gh" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrei-yantsevich/"
          className="icon-holder"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
        </a>
      </div>
    </header>
  </div>
));

export default HomePage;
