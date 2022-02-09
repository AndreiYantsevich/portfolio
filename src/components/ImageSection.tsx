import React, {FC, memo} from 'react';

import about from 'assets/avatars/about.jpg';

import CV from '../assets/CV.pdf';

const ImageSection: FC = memo(() => (
    <div className="ImageSection">
        <img src={about} alt="avatar" className="img"/>
        <div className="about-info">
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
                    <p>: Andrey Yantsevich</p>
                    <p>: 29</p>
                    <p>: English, Russian</p>
                    <p>: Belarus</p>
                </div>
            </div>
            <button className="btn" type="button">
                <a href={CV} target="_blank" className="link">Download CV</a>
            </button>
        </div>
    </div>
));

export default ImageSection;
