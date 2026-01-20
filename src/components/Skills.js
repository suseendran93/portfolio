import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoGithub, IoLogoNodejs } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa"
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ theme }) => {
  const skillImages = [
    <IoLogoJavascript size={50}/>,
    <IoLogoCss3 size={50}/>,
    <IoLogoHtml5 size={50}/>,
    <IoLogoReact size={50}/>,
    <IoLogoGithub size={50}/>,
    <IoLogoNodejs size={50}/>,
    <FaBootstrap size={50}/>,
    <DiMongodb size={50}/>,
    <VscVscode size={50}/>,
  ];

  const skills = skillImages.map((item) => {
    return (
      <Col md={4} lg={4} className="p-2">
        <div className="d-none d-md-block" style={{ position: "relative" }}>
          {item}
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
