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
      <SkillsSection skill="Javascript" progress="60%" width="60%" />
      <SkillsSection skill="Typescript" progress="30%" width="30%" />
      <SkillsSection skill="React JS" progress="70%" width="70%" />
      <SkillsSection skill="Node Js" progress="80%" width="80%" />
      <SkillsSection skill="Python" progress="90%" width="90%" />
      <SkillsSection skill="Lua" progress="40%" width="40%" />
      <SkillsSection skill="Java" progress="80%" width="80%" />
      <SkillsSection skill="Web Design" progress="25%" width="25%" />
      <SkillsSection skill="UI/Ux Design" progress="76%" width="76%" />
    </div>

    <Tittle title="Services" span="Services" />
    <div className="services-container">
      <ServicesSection
        image={Design}
        title="Web design"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ServicesSection
        image={Intelligence}
        title="Artificial Intelligence"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ServicesSection
        image={Gamedev}
        title="Game Development"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  </div>
));

export default AboutPage;
