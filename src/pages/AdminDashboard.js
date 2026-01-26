import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import PortfolioPreview from "../components/PortfolioPreview";

const AdminDashboard = ({ userId }) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      bio: "",
      profileImage: null
    },
    about: {
      description: ""
    },
    skills: [{ name: "", level: 50 }],
    education: [{ school: "", degree: "", year: "" }],
    work: [{ company: "", role: "", description: "", duration: "" }],
    contact: [{ type: "email", value: "" }],
    theme: {
      darkMode: false,
      primaryColor: "#007bff"
    }
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, [name]: value }
    });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { name: "", level: 50 }]
    });
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = [...formData.skills];
    newSkills[index][field] = value;
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSavePortfolio = async () => {
    // Save to Firebase
    const portfolioRef = await db.collection("portfolios").add({
      userId,
      ...formData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    alert("Portfolio saved! URL: yoursite.com/portfolio/" + portfolioRef.id);
  };

  return (
    <Container fluid>
      <Row>
        {/* Form Section */}
        <Col md={6}>
          <h2>Build Your Portfolio</h2>

          {/* Personal Info Section */}
          <section className="form-section">
            <h4>Personal Information</h4>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.personalInfo.name}
                onChange={handlePersonalInfoChange}
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={handlePersonalInfoChange}
                placeholder="your.email@example.com"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.personalInfo.phone}
                onChange={handlePersonalInfoChange}
                placeholder="+91 XXXXXXXXXX"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="bio"
                value={formData.personalInfo.bio}
                onChange={handlePersonalInfoChange}
                placeholder="Brief introduction about yourself"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
              />
            </Form.Group>
          </section>

          {/* About Section */}
          <section className="form-section">
            <h4>About</h4>
            <Form.Group>
              <Form.Label>About Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Tell us about yourself, your experience, and what you do"
              />
            </Form.Group>
          </section>

          {/* Skills Section */}
          <section className="form-section">
            <h4>Skills</h4>
            {formData.skills.map((skill, index) => (
              <Row key={index} className="mb-3">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Skill name (e.g., JavaScript)"
                    value={skill.name}
                    onChange={(e) =>
                      handleSkillChange(index, "name", e.target.value)
                    }
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    onChange={(e) =>
                      handleSkillChange(index, "level", e.target.value)
                    }
                  />
                  <small>{skill.level}%</small>
                </Col>
              </Row>
            ))}
            <Button onClick={handleAddSkill} variant="secondary" size="sm">
              + Add Skill
            </Button>
          </section>

          {/* Education Section */}
          <section className="form-section">
            <h4>Education</h4>
            <Form.Group>
              <Form.Label>School/University</Form.Label>
              <Form.Control type="text" placeholder="School name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control type="text" placeholder="e.g., B.Tech, MBA" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" placeholder="2023" />
            </Form.Group>
            <Button variant="secondary" size="sm">
              + Add Education
            </Button>
          </section>

          {/* Work Experience Section */}
          <section className="form-section">
            <h4>Work Experience</h4>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Company name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Your role/position" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="What did you do?" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" placeholder="Jan 2020 - Dec 2023" />
            </Form.Group>
            <Button variant="secondary" size="sm">
              + Add Experience
            </Button>
          </section>

          {/* Theme Settings */}
          <section className="form-section">
            <h4>Theme Settings</h4>
            <Form.Group>
              <Form.Check
                type="switch"
                label="Dark Mode"
                defaultChecked={formData.theme.darkMode}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Primary Color</Form.Label>
              <Form.Control
                type="color"
                value={formData.theme.primaryColor}
              />
            </Form.Group>
          </section>

          <Button
            onClick={handleSavePortfolio}
            variant="primary"
            size="lg"
            className="mt-4"
          >
            Save & Publish Portfolio
          </Button>
        </Col>

        {/* Live Preview Section */}
        <Col md={6}>
          <h4>Live Preview</h4>
          <PortfolioPreview data={formData} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;