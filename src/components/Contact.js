import React, { useContext } from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import mobile from "../assets/mobile-phone-icon.svg";
import email from "../assets/email-icon.svg";
import linkedin from "../assets/linkedin-square-icon.svg";
import github from "../assets/github.svg";
import ThemeContext from "../context/ThemeContext";

const Contact = ({ theme }) => {
  const items = useContext(ThemeContext);

  const contactItems = [
    {
      icon: mobile,
      desc: "(+353)892187902",
    },
    {
      icon: email,
      desc: "suzeendran@gmail.com",
    },
  ];

  const contactItemMap = contactItems.map((item) => {
    return (
      <>
        <Col md={4} lg={3}>
          <div>
            <Image
              className={`contact-images ${
                items.theme ? "contact-img-dark" : ""
              }`}
              alt="js-img"
              width={64}
              height={64}
              src={item.icon}
            />
            <p className="mt-1 text-muted">{item.desc}</p>
          </div>
        </Col>
      </>
    );
  });
  return (
    <Container>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text className="mt-5">
                <Row className="justify-content-center">
                  <>
                    {contactItemMap}
                    <Col md={4} lg={3}>
                      <div>
                        <a
                          href="https://www.linkedin.com/in/suseendran-k-02101993/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            className={`contact-images ${
                              items.theme ? "contact-img-dark" : ""
                            }`}
                            alt="js-img"
                            width={64}
                            height={64}
                            src={linkedin}
                            style={{ cursor: "pointer" }}
                          />
                        </a>
                        <p className="mt-1 text-muted">suseendran-k-02101993</p>
                      </div>
                    </Col>
                    <Col md={4} lg={3}>
                      <div>
                        <a
                          href="https://github.com/suseendran93"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            className={`contact-images ${
                              items.theme ? "contact-img-dark" : ""
                            }`}
                            alt="js-img"
                            width={64}
                            height={64}
                            src={github}
                            style={{ cursor: "pointer" }}
                          />
                        </a>
                        <p className="mt-1 text-muted">suseendran93</p>
                      </div>
                    </Col>
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
