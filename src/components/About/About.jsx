import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Wrapper from "../Wrapper/Wrapper";
import { Card } from "react-bootstrap";
import { Aboutdata } from "../../assets/Aboutdata";
import "./About.css";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <Wrapper>
      <div className="about-component">
        <h1 className="section-title mb-5">
          Know Who <span className="name">I'M</span>
        </h1>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
            },
          }}
          className="p-2"
          style={{ boxSizing: "border-box" }}
        >
          {Aboutdata?.map((item, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  color="textSecondary"
                  className="about-card-opposite"
                >
                  {item.title}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card className="about-card">
                    <Card.Body>
                      <Card.Title className="ml-2 card_title">
                        {item.card_title}
                      </Card.Title>
                      <Card.Subtitle className="ml-2 mb-2 card_subtitle text-muted">
                        {item.time}
                      </Card.Subtitle>
                      <p className="ml-2 text-muted card_desc">
                        {item.additional}
                      </p>
                      <div className="logo d-flex" key={index}>
                        {item.logo?.map((logo, index) => {
                          return (
                            <img
                              src={logo}
                              alt={item.card_title}
                              className="icon"
                              key={index}
                            />
                          );
                        })}
                      </div>
                    </Card.Body>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
      <Skills />
    </Wrapper>
  );
};

export default About;
