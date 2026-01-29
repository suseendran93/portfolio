import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaMobileAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const Contact = ({ theme }) => {
  const items = useContext(ThemeContext);

  const { portfolioData } = useContext(PortfolioContext);

  const contactItems = [
    {
      icon: <FaMobileAlt size={50} />,
      desc: portfolioData.contact.phone || "Phone",
    },
    {
      icon: <FaEnvelope size={50} />,
      desc: portfolioData.contact.email || "Email",
    },
    {
      icon: <FaLinkedin size={50} color={`${items.theme ? "#fff" : "#000"}`} />,
      desc: "LinkedIn",
      href: portfolioData.contact.linkedin
    },
    {
      icon: <FaGithub size={50} color={`${items.theme ? "#fff" : "#000"}`} />,
      desc: "GitHub",
      href: portfolioData.contact.github
    }
  ];

  const contactItemMap = contactItems.map((item) => {
    return (
      <>
        <Col md={4} lg={3}>
          <div className={`contact-icon ${items.theme ? "contact-icon-dark" : ""}`}>
            {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.icon}</a> : item.icon}
            <p className="mt-1 text-muted">{item.desc}</p>
          </div>
        </Col>
      </>
    );
  });
  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text className="mt-5">
                <Row className="justify-content-center" >
                  <>
                    {contactItemMap}
                  </>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
