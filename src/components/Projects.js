import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projTask from "../assets/img/ProyectoTask.png";
import projP2Finace from "../assets/img/p2Finance.png";
import projGraph from "../assets/img/Graficas.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {useTranslation} from "react-i18next";


export const Projects = () => {

  const [textElement, i18n] = useTranslation("global");

  const projects = [
    {
      title: textElement("Projects.TaskManager.Title"),
      description: textElement("Projects.TaskManager.Description"),
      tecnologies: textElement("Projects.TaskManager.Technologies"),

      buttonText: textElement("Projects.BtnDeployProject"),
      imgUrl: projTask,
      projectUrl: "https://main.d214u6lnwj7wky.amplifyapp.com/"

    },
    {
      title: textElement("Projects.P2Finance.Title"),
      description: textElement("Projects.P2Finance.Description"),
      tecnologies: textElement("Projects.P2Finance.Technologies"),

      buttonText: textElement("Projects.BtnDeployProject"),
      imgUrl: projP2Finace,
          projectUrl: "#"

    },{
      title: textElement("Projects.GraphBoard.Title"),
      description: textElement("Projects.GraphBoard.Description"),
      tecnologies: textElement("Projects.GraphBoard.Technologies"),

      buttonText: textElement("Projects.BtnDeployProject"),
      imgUrl: projGraph,
          projectUrl: "#"
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{textElement("ProjectsContainer.Title")}</h2>
              <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}
