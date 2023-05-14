
import React from "react";
import conf from "../../config.json";
import { Col, Row } from "react-bootstrap";
import IconSearch from './IconSearch'

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        conf.skillset.map((icon) =>
          <Col xs={4} md={2} className="tech-icons">
            {IconSearch(icon)}
          </Col>
        )
      }
    </Row>
  )
}

export default Techstack;
