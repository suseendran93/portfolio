import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import js from "../assets/js.svg";
import css from "../assets/css-icon.svg";
import html from "../assets/html-icon.svg";
import react from "../assets/react-js-icon.svg";
import git from "../assets/git-icon.svg";
import bootstrap from "../assets/bootstrap-5-logo-icon.svg";
import nodejs from "../assets/nodejs-icon.svg";
// import r from "../assets/r-programming-language-icon.svg";
// import python from "../assets/python-programming-language-icon.svg";
// import java from "../assets/java-programming-language-icon.svg";
// import sql from "../assets/sql-icon.svg";
import mongo from "../assets/mongodb-icon.svg";
import vs from "../assets/visual-studio-code-icon.svg";
const Skills = ({ theme }) => {
  const skillImages = [
    js,
    css,
    html,
    react,
    git,
    bootstrap,
    nodejs,
    // r,
    // python,
    // java,
    // sql,
    mongo,
    vs,
  ];

  const skills = skillImages.map((item) => {
    return (
      <Col md={4} lg={4} className="p-2">
        <div className="d-none d-md-block" style={{ position: "relative" }}>
          <Image
            className="skills-images"
            //  skill-card"
            alt="js-img"
            width={250}
            height={250}
            src={item}
          />
          {/* <div className="skill-percent">95%</div> */}
        </div>
        <div className="d-sm-block d-md-none">
          <Image
            className="skills-images"
            alt="js-img"
            width={150}
            height={150}
            src={item}
          />
        </div>
      </Col>
    );
  });
  return (
    <Container>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Card.Body>
              <Card.Title className="mb-4">My SKills</Card.Title>

              <Card.Text>
                <Row>{skills}</Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
