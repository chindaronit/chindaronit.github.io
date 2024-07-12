import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary shadow sticky-bottom">
      <Container id="contact">
        <Navbar.Brand>
          chinda_ronit
          <CopyrightIcon />
          2023
        </Navbar.Brand>
        <Navbar className="p-0">
          <Nav>
            <div className="footbar">
              <Nav.Link
                href="https://www.linkedin.com/in/chindaronit/"
                className="nav-link col-black"
              >
                <LinkedInIcon />
              </Nav.Link>
              <Nav.Link
                href="mailto:ronitchinda100@gmail.com"
                className="nav-link col-black"
              >
                <EmailIcon />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/chindaronit"
                className="nav-link col-black"
              >
                <GitHubIcon />
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com/ChindaRonit"
                className="nav-link col-black"
              >
                <XIcon />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Footer;
