
import React from "react";
import conf from "../../config.json";
import { Col, Row } from "react-bootstrap";
import IconSearch from './IconSearch'
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        conf.skillset.map((icon) =>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id={`tooltip-${icon}`}>{icon}</Tooltip>}
            >
              <div>{IconSearch(icon)}</div>
            </OverlayTrigger>
          </Col>
        )
      }
    </Row>
  )
}

export default Techstack;
