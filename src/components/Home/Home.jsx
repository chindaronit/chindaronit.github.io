import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";
import Wrapper from "../Wrapper/Wrapper";
import Content from "./Content";
import GitHubIcon from "@mui/icons-material/GitHub";
import gfg from "../../assets/gfg.png";
import leetcode from "../../assets/leetcode.png";
import profile from "../../assests/profile.JPG";

const Home = () => {
  return (
    <Wrapper>
      <div className="p-5 over-hid">
        <div className="d-flex justify-space-between">
          <div className="mt-5 ml-5">
            <h3 className="name-intro">
              Hey There! <span className="name">I'm Ronit Chinda</span>
            </h3>
            <Content />
            <div className="coding d-flex mt-5 w-100">
              <a href="https://auth.geeksforgeeks.org/user/chinda_ronit/">
                <img src={gfg} alt="gfg" className="logo" />
              </a>
              <a href="https://leetcode.com/_victus_/">
                <img src={leetcode} alt="leetcode" className="ml-2 logo" />
              </a>
              <a href="https://github.com/chindaronit">
                <GitHubIcon className="logo ml-2" />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-end w-100">
            <div className="profile">
              <img src={profile} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
        <div className="d-flex ml-5 mt-4">
          <a href="https://drive.google.com/uc?export=download&id=13oGV2PO1bFJQlJ6tqZ0TCCf8cVDtt-kA">
            <Button variant="dark button">Resume</Button>
          </a>
          <a href="#contact">
            <Button variant="dark button" className="ml-3">
              Get In Touch...
            </Button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
