import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul R </span>
            from <span className="purple"> Madurai, TamilNadu-India.</span>
            <br />
            As an aspiring MERN stack developer, 
            I'm on a mission to turn creative ideas into digital reality through code. 
            
            <br />
            I have a passion for designing and developing custom websites, 
            and I'm excited to learn and grow in the world of web development. 
            Let's build something amazing together!"
            <br />
          </p>
          <ul>            
          <strong>Competencies</strong>
            <li className="about-activity">
              <ImPointRight /> Team Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Avid Learner
            </li>
            <li className="about-activity">
              <ImPointRight /> Adaptability
            </li>
          </ul> <p>✅ Currently pursuing Full Stack Development - BootCamp course at GUVI Geeks</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
