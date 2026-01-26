import React from "react";
import { Card, Container } from "react-bootstrap";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const PortfolioPreview = ({ data, theme }) => {
  return (
    <div style={{ 
      border: "2px solid #ddd", 
      borderRadius: "8px", 
      overflow: "hidden",
      maxHeight: "600px",
      overflowY: "auto"
    }}>
      <Container>
        <h3 className="mt-3">{data.personalInfo.name}</h3>
        <p className="text-muted">{data.personalInfo.bio}</p>
        
        <About data={data.about} theme={theme} />
        <Skills data={data.skills} theme={theme} />
        <Contact data={data.contact} theme={theme} />
      </Container>
    </div>
  );
};

export default PortfolioPreview;