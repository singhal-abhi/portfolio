import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import conf from "../../config.json";

/**
 * Experience component to display the experience section.
 * @returns {JSX.Element} The rendered Experience component.
 */
function Experience() {
  return (
    <Container>
      {conf.experience.map((exp, index) => (
        <Row key={index} className="experience-row" style={{ marginBottom: "30px", paddingBottom: "10px" }}>
          <Col md={4} className="experience-company">
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.duration}</p>
          </Col>
          <Col md={8} className="experience-details">
            <ul>
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Experience;
