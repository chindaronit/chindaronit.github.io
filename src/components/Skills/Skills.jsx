import React from "react";
import { Skillsdata, ToolsData } from "../../assets/Skillsdata";
import { Card } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
      <div className="skills-component">
        <h1 className="section-title">
          Professional <span className="name">SkillSet</span>
        </h1>
        <div className="skill-item">
          <div className="tech-stack">
            {Skillsdata?.tech_stack?.map((tech, id) => {
              return (
                <Card key={id} className="skills-card">
                  <img src={tech} />
                </Card>
              );
            })}
          </div>
        </div>
        <h1 className="section-title" id="skills">
          <span className="name">Tools</span> I've used
        </h1>
        <div className="skill-item">
          <div className="tech-stack">
            {ToolsData?.tools?.map((tech, id) => {
              return (
                <Card key={id} className="skills-card">
                  <img src={tech} />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default Skills;
