import React, { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
const NavbarHeader = () => {
  const about = useRef(null);
  const skills = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="header-nav">
              <Nav.Link
                as={Link}
                to="/portfolio/about"
                eventKey="about"
                onClick={() => {
                  scrollToSection(about);
                }}
              >
                <div style={{ padding: "0 2em" }}>About</div>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/portfolio/skills"
                eventKey="skills"
                onClick={() => {
                  scrollToSection(skills);
                }}
              >
                <div style={{ padding: "0 2em" }}>My Skills</div>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/portfolio/work"
                eventKey="work"
                onClick={() => {
                  scrollToSection(work);
                }}
              >
                <div style={{ padding: "0 2em" }}>Work</div>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/portfolio/contact"
                eventKey="contact"
                onClick={() => {
                  scrollToSection(contact);
                }}
              >
                <div style={{ padding: "0 2em" }}>Contact</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="about" ref={about}>
        <About />
      </div>
      <div className="skills" ref={skills}>
        <Skills />
      </div>
      <div className="work" ref={work}>
        <Work />
      </div>
      <div className="contact" ref={contact}>
        <Contact />
      </div>
    </>
  );
};

export default NavbarHeader;
