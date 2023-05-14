import React from "react";
import { Col, Row } from "react-bootstrap";
import conf from "../../config.json";
import IconSearch from './IconSearch'
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        conf.tools.map((icon) =>
          <Col xs={4} md={2} className="tech-icons">
            {IconSearch(icon)}
          </Col>
        )
      }
    </Row>
  );
}

export default Toolstack;
