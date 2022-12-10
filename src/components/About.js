import React from "react";
import info from "../data/info.json";
import { Card, Image, Row, Col, Container } from "react-bootstrap";
import pic from "../assets/profile-image.jpg";

const About = ({ theme }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Row className="align-items-center justify-content-center">
              <Col lg={4}>
                <div className="d-lg-none">
                  <Card.Title>Suseendran Kumar</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted">
                    Frontend developer
                  </Card.Subtitle>
                </div>
                <Image
                  className="my-2"
                  roundedCircle
                  alt="profile-img"
                  width={250}
                  height={250}
                  src={pic}
                />
              </Col>
              <Col>
                <Card.Body>
                  <div className="d-none d-lg-block">
                    <Card.Title>Suseendran Kumar</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Frontend developer
                    </Card.Subtitle>
                  </div>
                  <Card.Text className="bio">{info.about}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
