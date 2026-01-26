import React, { useState } from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import info from "../data/info.json";

const Education = ({ theme }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container style={{textAlign:"center"}}>
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
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Higher Secondary</h3>

                      <h5>New Prince Matric. Hr. Sec. School</h5>
                      <p>2010-2011</p>
                      <p className="education-accomplishments">
                        {info.education[0]}
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Under graduate</h3>
                      <h5>Sri Sairam Engineering College</h5>
                      <p>2011-2015</p>
                      <p className="education-accomplishments">
                        {info.education[1]}
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Post Graduate</h3>
                      <h5>Dublin Business School</h5>
                      <p>2022-2023</p>
                      <p className="education-accomplishments">
                        {info.education[2]}
                      </p>
                    </div>
                  </Carousel.Item>
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
