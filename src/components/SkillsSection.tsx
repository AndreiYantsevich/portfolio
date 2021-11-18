import React, { FC, memo } from "react";

type PropsType = {
  skill: string;
  width: string;
};

const SkillsSection: FC<PropsType> = memo(({ skill, width }) => (
  <div className="SkillsSection">
    <div className="skills-container">
      <h5 className="skill-title">{skill}</h5>
      <div className="skill-bar">
        <div className="skill-progress">
          <div className="progress">
            <div className="inner-progress" style={{ width }} />
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default SkillsSection;
