import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoGithub, IoLogoNodejs } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa"
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ theme }) => {
  const skillImages = [
    <IoLogoJavascript key="js" size={50}/>,
    <IoLogoCss3 key="css" size={50}/>,
    <IoLogoHtml5 key="html" size={50}/>,
    <IoLogoReact key="react" size={50}/>,
    <IoLogoGithub key="github" size={50}/>,
    <IoLogoNodejs key="node" size={50}/>,
    <FaBootstrap key="bootstrap" size={50}/>,
    <DiMongodb key="mongo" size={50}/>,
    <VscVscode key="vscode" size={50}/>,
  ];

  const skills = skillImages.map((item, index) => {
    return (
      <Col key={index} xs={6} sm={4} md={4} lg={4} className="p-2">
        <div className="d-flex justify-content-center align-items-center skill-icon-wrapper">
          {item}
        </div>
      </Col>
    );
  });
  return (
    <Container style={{textAlign:"center"}}>   
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Card.Body>
              <Card.Title className="mb-4">My SKills</Card.Title>

              <Card.Text>
                <Row className="justify-content-center" >{skills}</Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
