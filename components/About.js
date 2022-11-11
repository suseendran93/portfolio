import { Card, Image, Row, Col, Container } from "react-bootstrap";
import pic from "../assets/profile-image.jpg";
const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ margin: "1em auto", height: "auto" }}>
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
                  <Card.Text className="bio">
                    I'm a front end developer with an electronics engineering
                    background based in India. A result-oriented information
                    technology professional with over 6+ years of experience
                    which includes areas of Software application development &
                    enhancement, responsive web application development, service
                    delivery and client relationship management. Ability to
                    collaborate with teammates across Design, Product, Analysis
                    of data, and Backend Engineering to drive sophisticated
                    features from start to finish Strong exposure to Banking and
                    Financial domain. Seeking challenging opportunities where I
                    can fully use my skills for the success of the organization
                    as well as personal growth.
                  </Card.Text>
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
