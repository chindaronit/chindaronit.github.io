import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Wrapper from "../Wrapper/Wrapper";
import "./Achievement.css";

const Achievement = () => {
  return (
    <Wrapper>
      <h2 className="section-title mb-5" id="about">
        Achievements - Learnings
      </h2>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
        className="ml-4"
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Ranked within the Top 25 Geeks at our institute.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Achieved proficiency by solving over 400 questions on GeeksForGeeks
            and over 250 questions on Leetcode.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="d-flex justify-content-between">
              Progressed to the second round of Flipkard Grid participation.
              <a href="https://drive.google.com/file/d/1BuWM7szT8JfwAZJo3ZxjwtSf9_ynUP3M/view?usp=drive_link">
                Certificate
              </a>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Developed Tetris in Unity-2D.</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <div className="d-flex justify-content-between">
              Successfully completed the Machine Learning Course by Andrew Ng on
              Coursera.
              <a href="https://drive.google.com/file/d/1UDRdEN7Tb7M7rjP3Rpr1V00MDaIkB6GZ/view?usp=sharing">
                Certificate
              </a>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Wrapper>
  );
};

export default Achievement;
