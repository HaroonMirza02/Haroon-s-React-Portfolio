import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaLaravel, FaBootstrap } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPhp,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  const techStack = [
    { name: "Java", icon: <DiJava /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Express.Js", icon: <SiExpress /> },
    { name: "React", icon: <DiReact /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "Git", icon: <DiGit /> },
    { name: "Python", icon: <DiPython /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "bootstrap", icon: <FaBootstrap /> },
    { name: "Springboot", icon: <DiJava /> },

  ];

  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStack.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <h5 style={{ textAlign: "center" }}>{tech.name}</h5>
            {tech.icon}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
