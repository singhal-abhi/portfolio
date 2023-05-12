
import React from "react";
import conf from "../../config.json";
import { Col, Row } from "react-bootstrap";
import {
  CgCPlusPlus
} from "react-icons/cg"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai";


function Techstack() {
  const getIconComponent = (iconName) => {
    console.log(iconName);
    switch (iconName) {
      case "CgCPlusPlus":
        return <CgCPlusPlus />;
      case "DiJavascript1":
        return <DiJavascript1 />;
      case "DiReact":
        return <DiReact />;
      case "DiNodejs":
        return <DiNodejs />;
      case "DiMongodb":
        return <DiMongodb />;
      case "DiPython":
        return <DiPython />;
      case "DiGit":
        return <DiGit />;
      case "SiPytorch":
        return <SiPytorch />;
      case "SiFirebase":
        return <SiFirebase />;
      case "SiNextdotjs":
        return <SiNextdotjs />;
      default:
        return <AiOutlineQuestionCircle />;
    }
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {
      conf.skillset.map((icon) => 
        <Col xs={4} md={2} className="tech-icons">
          {getIconComponent(icon)}
      </Col>
      
            )
            }
    </Row>
  )
}

export default Techstack;
