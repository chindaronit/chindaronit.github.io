import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Bar.css";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <Navbar expand="xl" className="bg-body-tertiary navbar">
      <Container id="home">
        <Navbar.Brand id="brand">chinda_ronit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Link to={"/"}>
              <div className="nav-link hover-underline-animation">Home</div>
            </Link>
            <Link to={"/about"}>
              <div className="nav-link hover-underline-animation">About</div>
            </Link>
            <Link to="/projects">
              <div className="nav-link hover-underline-animation">Projects</div>
            </Link>
            <Link to="/resume">
              <div className="nav-link hover-underline-animation">Resume</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Bar;
