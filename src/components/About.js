import React, { useState, useEffect, useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { Card, Row, Col, Container } from "react-bootstrap";
import Skeleton from "./Skeleton/Skeleton";

const About = ({ theme }) => {
  const { portfolioData } = useContext(PortfolioContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            {
              loading ? (
                <Row className="align-items-center justify-content-center">
                  <Col lg={12}>
                    <Skeleton height="30px" width="40%" />
                    <Skeleton height="100px" count={3} />
                  </Col>
                </Row>
              ) : (
                <Row className="align-items-center justify-content-center">
                  <Col lg={12}>
                    <Card.Body>
                      <Card.Title>About Me</Card.Title>
                      <Card.Text className="bio">{portfolioData.about}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              )
            }

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
