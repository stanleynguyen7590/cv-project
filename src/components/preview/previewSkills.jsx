import React from "react";
const PreviewSkills = props => {
  const renderSkillDots = skillLevel => {
    const totalsDots = Array(10).fill(null);
    return (
      <div className="preview__body-skills-dots">
        {totalsDots.slice(0, skillLevel).map((item, index) => (
          <p className="preview__body-skills-dot-active" key={index}></p>
        ))}
        {totalsDots.slice(skillLevel, 10).map((item, index) => (
          <p className="preview__body-skills-dot-inactive" key={index}></p>
        ))}
      </div>
    );
  };
  return (
    <>
      <h2 className="preview__body-headText">SKILLS</h2>
      {props.data.map((item, index) => (
        <React.Fragment key={index}>
          <p>{item.skill}</p>
          {renderSkillDots(item.skillLevel)}
        </React.Fragment>
      ))}
    </>
  );
};

export default PreviewSkills;
