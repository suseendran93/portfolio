import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoGithub, IoLogoNodejs } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa"
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ theme }) => {
  const { portfolioData } = useContext(PortfolioContext);

  // Helper to map skill name to icon
  const getIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes("java") && !n.includes("script")) return null; // Simple heuristic
    if (n.includes("javascript")) return <IoLogoJavascript size={50} />;
    if (n.includes("css")) return <IoLogoCss3 size={50} />;
    if (n.includes("html")) return <IoLogoHtml5 size={50} />;
    if (n.includes("react")) return <IoLogoReact size={50} />;
    if (n.includes("github")) return <IoLogoGithub size={50} />;
    if (n.includes("node")) return <IoLogoNodejs size={50} />;
    if (n.includes("bootstrap")) return <FaBootstrap size={50} />;
    if (n.includes("mongo")) return <DiMongodb size={50} />;
    if (n.includes("vscode")) return <VscVscode size={50} />;
    return null;
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Card.Body>
              <Card.Title className="mb-4">My Skills</Card.Title>

              <Card.Text>
                <Row className="justify-content-center">
                  {portfolioData.skills && portfolioData.skills.map((skill, index) => {
                    const icon = getIcon(skill.name);
                    return (
                      <Col key={index} xs={6} sm={4} md={4} lg={4} className="p-2">
                        <div className="d-flex flex-column justify-content-center align-items-center skill-icon-wrapper">
                          {icon ? icon : <div style={{ fontSize: "20px", fontWeight: "bold" }}>{skill.name}</div>}
                          {!icon && <div style={{ fontSize: "12px", marginTop: "5px" }}>{skill.name}</div>}
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
