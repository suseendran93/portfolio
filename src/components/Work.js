import React, { useState, useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";

const Work = ({ theme }) => {
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
                  {portfolioData.work && portfolioData.work.length > 0 ? (
                    portfolioData.work.map((item, idx) => (
                      <Carousel.Item key={idx}>
                        <div className="work-item">
                          {/* Assuming item is string for now based on JSON structure seen in info.json, 
                                    but builder should ideally provide objects. 
                                    However, the info.json array contained strings.
                                    Wait, looking at info.json, work array elements were STRINGS.
                                    But the Work.js component had hardcoded titles: "Hexaware...", "Software Engineer".
                                 */}
                          {/* 
                                   Issue: The existing JSON only had descriptions. The Titles and Dates were HARDCODED in Work.js.
                                   Detailed Refactoring needed:
                                   I need to restructure the data model to include Company, Role, Date.
                                   For now, I will display the string as the description.
                                   AND I will add placeholders for Title/Company if not present in data (or migrating data structure).
                                   
                                   Since I initialized Context with `infoData.work` (which is array of strings),
                                   I should treat them as just descriptions for now, OR I should update the Context initialization 
                                   to try to capture the hardcoded data if I want to preserve it.
                                   
                                   Given the user wants a builder, I should support objects.
                                   Let's assume for now the user will enter objects or strings.
                                   If string, display as description.
                                 */}
                          {typeof item === 'string' ? (
                            <>
                              <h3>Work Experience {idx + 1}</h3>
                              <p className="work-accomplishments">{item}</p>
                            </>
                          ) : (
                            <>
                              <h3>{item.company || "Company Name"}</h3>
                              <h5>{item.role || "Role"}</h5>
                              <p>{item.date || "Date"}</p>
                              <p className="work-accomplishments">{item.description}</p>
                            </>
                          )}
                        </div>
                      </Carousel.Item>
                    ))
                  ) : (
                    <Carousel.Item>
                      <div className="work-item">
                        <p>No work experience added yet.</p>
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

export default Work;
