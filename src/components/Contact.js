import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaMobileAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const Contact = ({ theme }) => {
  const items = useContext(ThemeContext);

  const contactItems = [
    {
      icon: <FaMobileAlt size={50} />,
      desc: "(+91)9551459935",
    },
    {
      icon: <FaEnvelope size={50} />,
      desc: "suzeendran@gmail.com",
    },
    {
      icon: <FaLinkedin size={50} color={`${items.theme ? "#fff" : "#000"}`}/>,
      desc: "Suseendran K",
      href: "https://www.linkedin.com/in/suseendran-k-02101993/"
    },
    {
      icon: <FaGithub size={50} color={`${items.theme ? "#fff" : "#000"}`}/>,
      desc: "suseendran93",
      href: "https://github.com/suseendran93"
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
    <Container style={{textAlign:"center"}}>
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
