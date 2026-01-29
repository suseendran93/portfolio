import React, { useState, useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";

const Education = ({ theme }) => {
  const { portfolioData } = useContext(PortfolioContext);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text className="m-3">
                <Carousel
                  className="align-items-center"
                  variant={theme ? "light" : "dark"}
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={null}
                  indicators={false}
                >
                  {portfolioData.education && portfolioData.education.length > 0 ? (
                    portfolioData.education.map((item, idx) => (
                      <Carousel.Item key={idx}>
                        <div className="work-item">
                          <h3>{item.degree}</h3>
                          <h5>{item.school}</h5>
                          <p>{item.date}</p>
                          <p className="education-accomplishments">
                            {item.description}
                          </p>
                        </div>
                      </Carousel.Item>
                    ))
                  ) : (
                    <Carousel.Item>
                      <div className="work-item">
                        <p>No education details added.</p>
                      </div>
                    </Carousel.Item>
                  )}
                </Carousel>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
