import React, {FC, memo} from 'react';

import {
    faGithub,
    faLinkedin,
    faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ReactTypingEffect from 'react-typing-effect'

const HomePage: FC = memo(() => (
    <div className="HomePage">
        <header className="hero">
            <div className="hero-text">
                <div className="text1">Hi There! I&apos;m</div>
                <div className="text1">Andrei Yantsevich</div>
                <span>
          <ReactTypingEffect text={['<Frontend Developer/>']}
                             speed={100}
                             eraseSpeed={50}
                             cursor={'|'}
          />
        </span>
            </div>
            <p className="h-sub-text">
                I am a person who has a strong passion for programming. I have
                experience in creating SPA with React/Redux/TypeScript.
            </p>
            <div className="icons">
                <a href="https://t.me/yantsev1ch" className="icon-holder">
                    <FontAwesomeIcon icon={faTelegram} className="icon tg"/>
                </a>
                <a href="https://github.com/AndreiYantsevich" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/andrei-yantsevich/"
                    className="icon-holder"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="icon ln"/>
                </a>
            </div>
        </header>
    </div>
));

export default HomePage;
