import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import conf from "../../config.json";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {conf.home_title}
            </h1>
            <p className="home-about-body">
              {conf.home_body}
              <br />
              <br />{conf.fluent_line}
              <i>
                <b className="purple"> {conf.coding_languages.join(", ")} </b>.
              </i>
              <br />
              <br />
              {conf.field_interest_line} &nbsp;
              <i>
                <b className="purple">
                  {conf.interests.join(", ")}
                </b>.
              </i>
              <br />
              <br />
              <p
                dangerouslySetInnerHTML={{
                  __html: conf.framework_sentence
                    .replace("{framework_lang}", conf.framework_lang)
                    .replace("{frameworks}", conf.frameworks.join(", "))
                }}
              />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>
              {conf.home_social_title}
            </h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={conf.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={conf.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={conf.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={conf.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
