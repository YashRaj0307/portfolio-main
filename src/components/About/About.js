import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import image from "../../Assets/image.png";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={image}
              style-prop-object="20px"
              alt="about"
              className="img-fluid"
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hello, I am <span className="red">Yash Sharma</span> a
                     student in{" "}
                    <span className="red">School of Computers</span>
                    graduated from IPS Academy from
                    <span className="red"> Indore, India</span>.
                    <br />
                    <br />
                    I have completed my certifications in Java Full Stack
                    Development & Postman . I am currently
                    learning Springboot.
                    <br />
                    <br />
                    This is my personal website which I have created to present
                    the skills which I have aquired while learning and the
                    projects developed. Given below are the listed tools and
                    stacks which have worked with :
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 className="project-heading">Skillsets Aquired</h1>

        <Techstack />

        <h1 className="project-heading">Tools Familier With</h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
