import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import conf from "../../config.json"
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {

            conf.projects.map((project) =>
              <Col md={project.width} className="project-card">
                <ProjectCard
                  imgPath={project.image}
                  isBlog={false}
                  title={project.title}
                  description={project.desc}
                  ghLink={project.github_link}
                  demoLink={project.demo_link}
                />
              </Col>
            )
          }


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
