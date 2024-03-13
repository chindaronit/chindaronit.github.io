import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InstagramIcon from "@mui/icons-material/Instagram";
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
        <Navbar className="justify-content-end footbar">
          <Nav className="d-block">
            <div className="w-100 contact-me">React Me Here!</div>
            <div className="d-flex">
              <Nav.Link href="https://www.linkedin.com/in/chindaronit/">
                <LinkedInIcon />
              </Nav.Link>
              <Nav.Link
                href="mailto:ronitchinda100@gmail.com"
                className="nav-link"
              >
                <EmailIcon />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/chindaronit"
                className="nav-link"
              >
                <GitHubIcon />
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com/ChindaRonit"
                className="nav-link"
              >
                <XIcon />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/chinda_ronit/"
                className="nav-link"
              >
                <InstagramIcon />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Footer;
