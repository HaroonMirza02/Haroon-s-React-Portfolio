import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinux } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiXampp,
} from "react-icons/si";

function Toolstack() {
  const toolStack = [
    { name: "Linux", icon: <FaLinux /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "XAMPP", icon: <SiXampp /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {toolStack.map((tool, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <h5 style={{ textAlign: "center" }}>{tool.name}</h5>
            {tool.icon}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Toolstack;
