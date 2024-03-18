import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Skillsdata } from "../../assets/Skillsdata";
import { Card } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <Wrapper>
      <div className="skills-component">
        <h2 className="section-title" id="skills">
          Skills
        </h2>
        <div
          className="d-flex justify-content-center p-4 flex-wrap"
          style={{ boxSizing: "border-box" }}
        >
          {Skillsdata?.map((item, index) => {
            return (
              <Card key={index} className="skills-card">
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <ul className="ml-5 hyphen">
                    {item.tech_stack?.map((ele, index) => {
                      return <li key={index} className="skill-item">{ele}</li>;
                    })}
                  </ul>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
