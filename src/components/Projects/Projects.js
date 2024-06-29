import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Encrypt from "../../Assets/Projects/Encrypt.png";
import watch from "../../Assets/Projects/watch.png";
import Payroll from "../../Assets/Projects/Payroll.png";
import Algo from "../../Assets/Projects/Algo.png";
import temp from "../../Assets/Projects/temp.png";
import Ecomm from "../../Assets/Projects/Ecomm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Algo}
              isBlog={false}
              title="Algorithm-Visualizer"
              description="An interactive web application for visualizing algorithms using HTML, CSS, JS, and React."
              ghLink="https://github.com/YashRaj0307/Algorithm-Visualizer"
              demoLink="https://yashraj0307.github.io/Algorithm-Visualizer/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomm}
              isBlog={false}
              title="E-commerce Website"
              description="A full-featured e-commerce platform built with Java, React, Spring Boot, MySQL, Postman, and Razorpay integration."
              ghLink="https://github.com/YashRaj0307/ecommerce-java-full-stack"
              demoLink="https://github.com/YashRaj0307/ecommerce-java-full-stack/blob/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Payroll}
              isBlog={false}
              title="Employee Payroll System"
              description="A Java and MySQL-based application for managing employee payroll efficiently."
              ghLink="https://github.com/YashRaj0307/Employee-Payroll-System"
              demoLink="https://github.com/YashRaj0307/Employee-Payroll-System/blob/main/README.md"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Encrypt}
              isBlog={false}
              title="Encryption-Decryption"
              description="A Java application for secure encryption and decryption of data."
              ghLink="https://github.com/YashRaj0307/Encryption-Project"
              demoLink="https://github.com/YashRaj0307/Encryption-Project/blob/master/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temp}
              isBlog={false}
              title="Temperature Convertor"
              description="A simple Java program to convert temperatures between Celsius, Fahrenheit, and Kelvin."
              ghLink="https://github.com/YashRaj0307/Temperature-Converter"
              demoLink="https://github.com/YashRaj0307/Temperature-Converter/blob/main/README.md"
            />
          </Col>

          { <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watch}
              isBlog={false}
              title="Digital Clock"
              description="A real-time digital clock application developed using Java"
              ghLink="https://github.com/YashRaj0307/Watch"
              demoLink="https://github.com/YashRaj0307/Watch/blob/master/README.md"
          />
          </Col> }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;