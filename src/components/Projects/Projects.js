import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Java from "../../Assets/Projects/Java.png";
import laravel from "../../Assets/Projects/laravel.png";
import react from "../../Assets/Projects/React.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently with their github links.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Java}
              isBlog={false}
              title="Flight Management System"
              description="Developed a Flight Management System for a Database course, encompassing schema design, normalization, indexing, SQL querying, and transaction management, with core features including passenger booking, aircraft scheduling, crew management, and automated report generation."
              ghLink="https://github.com/HaroonMirza02/SpringBoot-FlightManagementSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laravel}
              isBlog={false}
              title="Real Estate Management System"
              description="Developed using Laravel as part of my Web Engineering course.Implemented user authentication and authorization.Enabled property listing, search,and detailed views. Provided functionality for users to create, read, update, and delete property list-ings. Focused on creating a dynamic, interactive interface."
              ghLink="https://github.com/HaroonMirza02/Laravel-Real-Estate-Management/tree/master"
              // demoLink="https://vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Java}
              isBlog={false}
              title="Maze Generator"
              description="Created a Maze Generator application in Java that generates and solves random mazes, incorporating over 10 data structure concepts such as LinkedLists, Arrays, Depth-First Search (DFS), and Breadth-First Search (BFS)."
              ghLink="https://github.com/HaroonMirza02/MazeGenerator-DSA"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Java}
              isBlog={false}
              title="Student Management System"
              description="Developed a comprehensive Student Management System in Java for an Object-Oriented Programming course, applying core OOP principles like Encapsulation, Inheritance, Abstraction, and Polymorphism to create a robust and scalable system."
              ghLink="https://github.com/HaroonMirza02/OOP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Portfolio"
              description="Built a dynamic portfolio using React, featuring all essential elements such as a responsive layout, project showcase, skills section, and contact form, to effectively present and highlight my work and capabilities."
              ghLink="https://github.com/HaroonMirza02/OOP"
            />
          </Col>




          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
