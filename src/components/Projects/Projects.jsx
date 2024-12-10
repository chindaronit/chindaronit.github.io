import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Card from "react-bootstrap/Card";
import { Projectdata } from "../../assets/Projectdata";
import "./Projects.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <Wrapper className="greyscale">
      <div className="project-component">
        <h1 className="section-title" id="projects">
          My Recent <span className="name">Works</span>
        </h1>
        <h4 className="section-subtitle">
          Here are a few <span className="name">projects</span> on which I've worked
          recently.
        </h4>
        {Projectdata?.map((item, index) => {
          return (
            <div className="project-card" key={index}>
              <div className="project-img-div">
                <img src={item.img} alt={item.title} className="project-img" />
                <a href={item.link} target="_blank">
                  <OpenInNewIcon className="open-in-new-icon" />
                </a>
              </div>
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  className="mobile-github-icon"
                >
                  <GitHubIcon />
                </a>
              </div>
              <div className="project-info">
                <div className="project-title">{item.title}</div>
                <div className="project-subtitle">{item.subtitle}</div>
                <div className="project-description">
                  {item.desc.length > 1 ? (
                    <ul className="ml-2 circle">
                      {item.desc?.map((ele, index) => (
                        <li key={index}>{ele}</li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      {item.desc?.map((ele, index) => (
                        <div key={index}>{ele}</div>
                      ))}
                    </div>
                  )}
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  Tech Stack:
                </Card.Subtitle>
                <ul className="ml-5 hyphen">
                  {item.tech_stack?.map((ele, index) => {
                    return <li key={index}>{ele}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Projects;
