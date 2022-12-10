import React, { useRef, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Education from "./Education";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ThemeContext from "../context/ThemeContext";

const NavbarHeader = () => {
  const about = useRef(null);
  const skills = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);
  const education = useRef(null);

  const { theme, DarkTheme } = useContext(ThemeContext);

  const onThemeChange = () => {
    DarkTheme(!theme);
  };
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
                to="/portfolio/education"
                eventKey="education"
                onClick={() => {
                  scrollToSection(education);
                }}
              >
                <div style={{ padding: "0 2em" }}>Education</div>
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
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={1}
            onChange={onThemeChange}
            style={{ border: "1px solid white" }}
          >
            <ToggleButton id="tbg-radio-1" value={1} variant="light">
              {/* Dark */}
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} variant="outline-dark">
              {/* Light */}
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </Navbar>
      <div className="about" ref={about}>
        <About theme={theme} />
      </div>
      <div className="education" ref={education}>
        <Education theme={theme} />
      </div>
      <div className="skills" ref={skills}>
        <Skills theme={theme} />
      </div>
      <div className="work" ref={work}>
        <Work theme={theme} />
      </div>
      <div className="contact" ref={contact}>
        <Contact theme={theme} />
      </div>

      <footer>
        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgba(33,37,41,1)",
            color: "rgba(255, 255, 255, 0.55)",
          }}
        >
          &copy; {new Date().getFullYear()} Copyright: Suseendran's Portfolio
        </div>
      </footer>
    </>
  );
};

export default NavbarHeader;
