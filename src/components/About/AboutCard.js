import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import conf from "../../config.json"
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{conf.name} </span>
            from <span className="purple"> {conf.location}.</span>
            <br />
            {conf.intro_line}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {
              conf.hobbies.map((hobby)=>
              <li className="about-activity">
                <ImPointRight /> {hobby}
              </li>
              )
            }
            
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
