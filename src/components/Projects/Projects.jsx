import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Card from "react-bootstrap/Card";
import { Projectdata } from "../../assets/Projectdata";
import GitHub from "@mui/icons-material/GitHub";
import "./Projects.css";

const Projects = () => {
  return (
    <Wrapper className="greyscale">
      <h2 className="section-title" id="projects">
        Projects
      </h2>
      <div className="d-flex justify-content-between p-5 flex-wrap">
        {Projectdata?.map((item, index) => {
          return (
            <Card key={index} className="project-card p-1">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.subtitle}
                </Card.Subtitle>
                <ul className="ml-4 circle">
                  {item.desc?.map((ele, index) => {
                    return <li key={index}>{ele}</li>;
                  })}
                </ul>
                <Card.Subtitle className="mb-2 text-muted">
                  Tech Stack:
                </Card.Subtitle>
                <ul className="ml-5 hyphen">
                  {item.tech_stack?.map((ele, index) => {
                    return <li key={index}>{ele}</li>;
                  })}
                </ul>
                <Card.Link href={item.link} className="link">
                  <GitHub className="icon" />
                </Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Projects;
