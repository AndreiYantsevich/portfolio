import React, { FC, memo } from "react";

import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import Tittle from "../components/Tittle";

import Design from "assets/design.svg";
import Gamedev from "assets/game-dev.svg";
import Intelligence from "assets/intelligence.svg";

const AboutPage: FC = memo(() => (
  <div className="AboutPage">
    <Tittle title="About Me" span="About Me" />
    <ImageSection />
    <Tittle title="My Skills" span="My Skills" />
    <div className="skillsContainer">
      <SkillsSection skill="React" width="90%" />
      <SkillsSection skill="Redux" width="90%" />
      <SkillsSection skill="Javascript" width="85%" />
      <SkillsSection skill="Typescript" width="90%" />
      <SkillsSection skill="HTML5" width="90%" />
      <SkillsSection skill="CSS3" width="85%" />
      <SkillsSection skill="Axios/REST API" width="85%" />
      <SkillsSection skill="Unit Tests/StoryBook" width="80%" />
      <SkillsSection skill="UI/UX Design" width="80%" />
      <SkillsSection skill="GitHub/Git" width="85%" />
    </div>

    <Tittle title="Services" span="Services" />
    <div className="services-container">
      <ServicesSection
        image={Design}
        title="Web Development"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ServicesSection
        image={Intelligence}
        title="UI/UX"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ServicesSection
        image={Gamedev}
        title="Clean Code"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  </div>
));

export default AboutPage;
