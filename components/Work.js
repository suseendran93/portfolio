import React, { useState } from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";

const Work = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card
            style={{
              margin: "1em 0 2em 0",
              height: "350px",
            }}
          >
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text className="m-3">
                <Carousel
                  className="align-items-center"
                  variant="dark"
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={null}
                  indicators={false}
                >
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Hexaware Technologies Ltd.</h3>
                      <p>Software Engineer</p>
                      <p className="work-accomplishments">
                        Successfully automated web application using Selenium
                        webdriver and core java and supported development team
                        in fixing major issues and worked on 5 major releases.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Cognizant Technologies Solutions</h3>
                      <p>Associate Engineer</p>
                      <p className="work-accomplishments">
                        Successfully handled 6 major releases without any issue
                        in production. Effectively incorporated accessibility
                        changes across the application. Efficiently designed
                        responsive UI for a seamless User Experience across
                        various devices (PC, Laptop, Tablet, Mobile).
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Acube Technologies</h3>
                      <p>Technical Lead</p>
                      <p className="work-accomplishments">
                        Successfully handled major front end releases without
                        any issue in production. Effectively incorporated
                        accessibility changes across the application. Worked on
                        multiple modules with React Framework. Efficiently
                        designed responsive UI for a seamless User Experience
                        across various devices (PC, Laptop, Tablet, Mobile).
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

export default Work;
