import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskwarrior from "../../Assets/Projects/taskwarrior.png";

import decodecollege from "../../Assets/Projects/decodecollege1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskwarrior}
              isBlog={false}
              title="TaskWarrior"
              description="The Project which I made during GSoC'22.This project aims to build an app for Taskwarrior. It is your task management app across all platforms. This help you manage your tasks and filter them as your need"
              ghLink="https://github.com/CCExtractor/taskwarrior-flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decodecollege}
              isBlog={false}
              title="Decode College"
              description="Project to aid college students in managing their college life. It is a web app that helps students to manage their college life. It has features like attendance, timetable, notes, and many more."
              ghLink="https://github.com/Virtual-Beings/DecodeCollege"
              demoLink="https://decode-college.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
