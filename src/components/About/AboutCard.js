import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello! I'm currently in my <span className="purple">final year of Bachelor's</span> in Software Engineering at <span className="purple">FAST NUCES</span> Karachi, driven by a deep enthusiasm for <span className="purple">Full Stack Web Development</span> and <span className="purple">Java Development </span> 
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            <br />
            My interests lie primarily in creating <span className="purple">innovative web technologies</span> and developing comprehensive <span className="purple">full stack projects. </span> I also have a keen focus on <span className="purple">Java development</span>, exploring its vast potential in different applications.
            <br />
            <br />
            When I'm not diving into code, you'll find me  and  
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Expanding my knowledge of new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on personal projects.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video games
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
          Recently, I've been exploring frameworks and libraries such as Laravel, React.js, and Node.js, keeping up-to-date with the latest advancements in the tech world.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
