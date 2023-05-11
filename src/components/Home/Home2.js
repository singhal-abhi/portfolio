import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import conf from "../../config.json" 

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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> {conf.conding_languages} </b>.
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">{conf.interests[0]},
                  {conf.interests.slice(0,conf.interests.length-1).map((tag) => (
                    <span>{tag}, </span>
                  ))}
                </b> 
                and 
                <b className="purple"> {conf.interests[conf.interests.length-1]}</b>.
                
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">{conf.framework_lang} frameworks</b> like
              <i>
                <b className="purple"> {conf.frameworks.slice(0,-1).map((tag) => (
                    <span key={tag}>{tag}, </span>
                  ))} and {conf.frameworks[conf.frameworks.length-1]} .</b>
              </i>
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
              Feel free to <span className="purple">connect </span>with me
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
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
