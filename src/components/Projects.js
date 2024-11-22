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
      buttonText: textElement("Projects.BtnOpenProject"),
      imgUrl: projTask,
      projectUrl: "https://main.d214u6lnwj7wky.amplifyapp.com/",
      projectUrlGit: "https://github.com/YoexRep/project-management",
      buttonTextDemo: textElement("Projects.BtnDemoProject"),
      buttonTextCode: textElement("Projects.BtnCodeProject"),
      buttonTextNoDemo: textElement("Projects.BtnNoDemoProject"),
      buttonTextNoCode: textElement("Projects.BtnNoCodeProject"),
      galleryItems: [
        {
          type: "video",
          src: "https://youtu.be/KAV8vo7hGAo",
          titleItem:  textElement("GalleryItems.TaskManager.TaskManagerTutorial.titleItem"),
          descriptionItem: textElement("GalleryItems.TaskManager.TaskManagerTutorial.descriptionItem"),
        },
        {
          type: "image",
          src: "https://via.placeholder.com/700",
          titleItem:  textElement("GalleryItems.TaskManager.Imagen1.titleItem"),
          descriptionItem: textElement("GalleryItems.TaskManager.Imagen1.descriptionItem"),
        },
        {
          type: "image",
          src: "https://via.placeholder.com/800",
          titleItem:  textElement("GalleryItems.TaskManager.Imagen2.titleItem"),
          descriptionItem: textElement("GalleryItems.TaskManager.Imagen2.descriptionItem"),
        },
      ],
    },
    {
      title: textElement("Projects.RestaurantSystem.Title"),
      description: textElement("Projects.RestaurantSystem.Description"),
      tecnologies: textElement("Projects.RestaurantSystem.Technologies"),
      buttonText: textElement("Projects.BtnOpenProject"),
      imgUrl: projP2Finace,
      projectUrl: "#",
      projectUrlGit: "#",
      buttonTextDemo: textElement("Projects.BtnDemoProject"),
      buttonTextCode: textElement("Projects.BtnCodeProject"),
      buttonTextNoDemo: textElement("Projects.BtnNoDemoProject"),
      buttonTextNoCode: textElement("Projects.BtnNoCodeProject"),
      galleryItems: [
        {
          type: "video",
          src: "https://youtu.be/xyz12345", // Cambia por un video real
          titleItem:  textElement("GalleryItems.RestaurantSystem.RestaurantTutorial.titleItem"),
          descriptionItem: textElement("GalleryItems.RestaurantSystem.RestaurantTutorial.descriptionItem"),
        },
        {
          type: "image",
          src: "https://via.placeholder.com/500",
          titleItem:  textElement("GalleryItems.RestaurantSystem.Imagen1.titleItem"),
          descriptionItem: textElement("GalleryItems.RestaurantSystem.Imagen1.descriptionItem"),
        },
        {
          type: "image",
          src: "https://via.placeholder.com/600",
          titleItem:  textElement("GalleryItems.RestaurantSystem.Imagen2.titleItem"),
          descriptionItem: textElement("GalleryItems.RestaurantSystem.Imagen2.descriptionItem"),
        },
       
      ],
    },
    {
      title: textElement("Projects.UberClone.Title"),
      description: textElement("Projects.UberClone.Description"),
      tecnologies: textElement("Projects.UberClone.Technologies"),
      buttonText: textElement("Projects.BtnOpenProject"),
      imgUrl: projGraph,
      projectUrl: "#",
      projectUrlGit: "#",
      buttonTextDemo: textElement("Projects.BtnDemoProject"),
      buttonTextCode: textElement("Projects.BtnCodeProject"),
      buttonTextNoDemo: textElement("Projects.BtnNoDemoProject"),
      buttonTextNoCode: textElement("Projects.BtnNoCodeProject"),
      galleryItems: [
        {
          type: "video",
          src: "https://youtu.be/KAV8vo7hGAo",
          titleItem:  textElement("GalleryItems.UberClone.UberCloneTutorial.titleItem"),
          descriptionItem: textElement("GalleryItems.UberClone.UberCloneTutorial.descriptionItem"),
        },
        {
          type: "image",
          src: "https://via.placeholder.com/500",
          titleItem:  textElement("GalleryItems.UberClone.Imagen1.titleItem"),
          descriptionItem: textElement("GalleryItems.UberClone.Imagen1.descriptionItem"),
        },
        {
          type: "image",
          src: "https://via.placeholder.com/600",
          titleItem:  textElement("GalleryItems.UberClone.Imagen2.titleItem"),
          descriptionItem: textElement("GalleryItems.UberClone.Imagen2.descriptionItem"),
        },
      ],
    },
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
