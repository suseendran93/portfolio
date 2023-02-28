import React, { useState } from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import info from "../data/info.json";

const Work = ({ theme }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card className={`card-style ${theme ? "card-style-dark" : ""}`}>
            <Card.Body>
              <Card.Title>Work</Card.Title>
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
                      <h3>Hexaware Technologies Ltd.</h3>

                      <h5>Software Engineer</h5>
                      <p>2015-2018</p>
                      <p className="work-accomplishments">{info.work[0]}</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Cognizant Technologies Solutions</h3>
                      <h5>Associate Engineer</h5>
                      <p>2018-2021</p>
                      <p className="work-accomplishments">{info.work[1]}</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="work-item">
                      <h3>Acube Technologies</h3>
                      <h5>Technical Lead</h5>
                      <p>2021-2022</p>
                      <p className="work-accomplishments">{info.work[2]}</p>
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
