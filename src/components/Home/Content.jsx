import React from "react";
import { ReactTyped } from "react-typed";

const Content = () => {
  return (
    <div className="content">
      <h3>
        I'm a{" "}
        <ReactTyped
          strings={[
            "Computer Science Student",
            "Full Stack Web Developer",
            "Leetcoder",
            "Kotlin Developer",
          ]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
          style={{ color: "#2196f3" }}
        />
      </h3>
    </div>
  );
};

export default Content;
