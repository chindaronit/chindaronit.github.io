import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";
import Wrapper from "../Wrapper/Wrapper";
import Content from "./Content";
import GitHubIcon from "@mui/icons-material/GitHub";
import gfg from "../../assets/gfg.png";
import leetcode from "../../assets/leetcode.png";
import profile from "../../assets/profile3.jpg";
import profile2 from "../../assets/profile2.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <div className="home-component">
        <div className="home-card">
          <div className="profile">
            <img src={profile} alt="Profile" className="profile-img" />
          </div>
          <div className="home-info">
            <h1 className="name-intro">
              Hey There! <span className="name">I'M RONIT CHINDA</span>
            </h1>
            <Content />
            <div>
              <div className="coding d-flex mt-5">
                <a href="https://auth.geeksforgeeks.org/user/chinda_ronit/">
                  <img src={gfg} alt="gfg" className="logo" />
                </a>
                <a href="https://leetcode.com/victus_/">
                  <img src={leetcode} alt="leetcode" className="ml-2 logo" />
                </a>
                <a href="https://github.com/chindaronit">
                  <GitHubIcon className="logo ml-2" />
                </a>
              </div>
              <div className="mt-4">
                <a href="https://drive.google.com/uc?export=download&id=1_kYfHVodw2ejmG8yiFHncqi0OxH0hrSu">
                  <Button variant="dark button">Resume</Button>
                </a>
                <a href="#contact">
                  <Button variant="dark button" className="ml-3">
                    Get In Touch...
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="down-component">
        <div className="home-card">
          <div className="home-info">
            <h1 className="name-intro">
              LEMME' <span className="name">INTRODUCE</span> MYSELF
            </h1>
            Hey Everybody I'm Ronit from{" "}
            <span className="name"> Rohtak, Haryana.</span> Currently a Computer
            Science student at <span className="name"> IIIT GUWAHATI </span>,
            Building a strong foundation through learning something useful, with
            a passion for innovation and collaboration in the tech industry.
            <br />
            <div className="hobby">
              <h4>
                <span className="name">Apart from this.</span>
              </h4>
              <ul className="dashed">
                <li>I love to code.</li>
                <li>Read Books</li>
                <li>Play Badminton</li>
                <li>Learn about finances and Investment.</li>
              </ul>
            </div>
            <Link to={"/about"}>
              <Button variant="dark button" className="ml-3">
                Know more...
              </Button>
            </Link>
          </div>
          <div className="profile2">
            <img src={profile2} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>

      <div className="contact-component">
        <h1>
          <b>
            <span className="name">FIND</span> ME ON
          </b>
        </h1>
        <h5>
          Feel Free to <span className="name">connect!</span>
        </h5>

        <div className="contact-icons">
          <Link
            to={"https://www.linkedin.com/in/chindaronit/"}
            className="link"
          >
            <LinkedInIcon className="icon" />
          </Link>
          <Link to={"https://github.com/chindaronit"} className="link">
            <GitHubIcon className="icon" />
          </Link>
          <Link to={"mailto:ronitchinda100@gmail.com"} className="link">
            <EmailIcon className="icon" />
          </Link>
          <Link to={"https://twitter.com/ChindaRonit"} className="link">
            <XIcon className="icon" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
