import React from "react";
// https://react-bootstrap.github.io/components/cards/#card-columns
import { CardColumns, Card } from "react-bootstrap";
import img from "../images/GoLocal Screenshot.PNG"


// Image
import defualtImage from "../images/logo.svg";

const Projects = () => {
  

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <hr />
        <CardColumns>
              <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <a href="https://reactisland.github.io/project-frontend/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      <h1>GoLocal</h1>
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card>
              <Card >
                <Card.Img variant="top" src={defualtImage} />
                <Card.Body>
                  <a href="https://reactisland.github.io/project-frontend/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      <h1>GoLocal</h1>
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card>
              <Card >
                <Card.Img variant="top" src={defualtImage} />
                <Card.Body>
                  <a href="https://reactisland.github.io/project-frontend/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      <h1>GoLocal</h1>
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card>
        </CardColumns>
      </div>
    </section>
  );
};

export default Projects;
