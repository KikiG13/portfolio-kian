import React from "react";
// https://react-bootstrap.github.io/components/cards/#card-columns
import { CardColumns, Card } from "react-bootstrap";
import img from "../images/GoLocal Screenshot.PNG"
import img1 from "../images/Trafelife screenshot.png"


// Image
// import defualtImage from "../images/logo.svg";

const Projects = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  

  return (
    <section id="projects" className={newTheme}>
      <div className="container text-center">
        <h2>Experience</h2>
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
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <a href="https://kikig13.github.io/travelife-client/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      <h1>Travelife</h1>
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card>
              {/* <Card >
                <Card.Img variant="top" src={defualtImage} />
                <Card.Body>
                  <a href="https://reactisland.github.io/project-frontend/" target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      <h1>GoLocal</h1>
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card> */}
        </CardColumns>
      </div>
    </section>
  );
};

export default Projects;
