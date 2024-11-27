import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {useTranslation} from "react-i18next";






//ProjectTaskManager images

import projTask from "../assets/img/ProjectsGallery/ProyectoTask.png";
import awsProduct from "../assets/img/ProjectsGallery/AWSProducts.jpg";
import Ec2Monitor from "../assets/img/ProjectsGallery/EC2-Monitor.jpg";

//Restaurant images
import projRestauramt from "../assets/img/ProjectsGallery/Restaurant.png";
import RestaurantCode from "../assets/img/ProjectsGallery/RestaurantCode.jpg";


//Uber Clone images
import projRyde from "../assets/img/ProjectsGallery/Ryde.png";
import ClerkDashboard from "../assets/img/ProjectsGallery/Clerk.jpg";
import NeonDbImg from "../assets/img/ProjectsGallery/NeonBd.jpg";



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
          src: "https://youtu.be/taUlVqq2aGU",
          titleItem:  textElement("GalleryItems.TaskManager.TaskManagerTutorial.titleItem"),
          descriptionItem: textElement("GalleryItems.TaskManager.TaskManagerTutorial.descriptionItem"),
          colorFullscreenButton: "#FFFFFF",
        },
        {
          type: "image",
          src: awsProduct,
          titleItem:  textElement("GalleryItems.TaskManager.Imagen1.titleItem"),
          descriptionItem: textElement("GalleryItems.TaskManager.Imagen1.descriptionItem"),
          colorFullscreenButton: "#808080",
        },
        {
          type: "image",
          src: Ec2Monitor,
          titleItem:  textElement("GalleryItems.TaskManager.Imagen2.titleItem"),
          descriptionItem: textElement("GalleryItems.TaskManager.Imagen2.descriptionItem"),
          colorFullscreenButton: "#FFFFFF",
        },
      ],
    },
    {
      title: textElement("Projects.RestaurantSystem.Title"),
      description: textElement("Projects.RestaurantSystem.Description"),
      tecnologies: textElement("Projects.RestaurantSystem.Technologies"),
      buttonText: textElement("Projects.BtnOpenProject"),
      imgUrl: projRestauramt,
      projectUrl: "#",
      projectUrlGit: "#",
      buttonTextDemo: textElement("Projects.BtnDemoProject"),
      buttonTextCode: textElement("Projects.BtnCodeProject"),
      buttonTextNoDemo: textElement("Projects.BtnNoDemoProject"),
      buttonTextNoCode: textElement("Projects.BtnNoCodeProject"),
      galleryItems: [
        {
          type: "video",
          src: "https://youtu.be/E4zPQtV_c_E", // Cambia por un video real
          titleItem:  textElement("GalleryItems.RestaurantSystem.RestaurantTutorial.titleItem"),
          descriptionItem: textElement("GalleryItems.RestaurantSystem.RestaurantTutorial.descriptionItem"),
          colorFullscreenButton: "#FFFFFF",
        },
        {
          type: "video",
          src: "https://youtu.be/gRsN1bKEV-s", // Cambia por un video real
          titleItem:  textElement("GalleryItems.RestaurantSystem.Video2.titleItem"),
          descriptionItem: textElement("GalleryItems.RestaurantSystem.Video2.descriptionItem"),
          colorFullscreenButton: "#FFFFFF",
        },
        {
          type: "image",
          src: RestaurantCode,
          titleItem:  textElement("GalleryItems.RestaurantSystem.Imagen2.titleItem"),
          descriptionItem: textElement("GalleryItems.RestaurantSystem.Imagen2.descriptionItem"),
          colorFullscreenButton: "#808080",
        },
       
      ],
    },
    {
      title: textElement("Projects.UberClone.Title"),
      description: textElement("Projects.UberClone.Description"),
      tecnologies: textElement("Projects.UberClone.Technologies"),
      buttonText: textElement("Projects.BtnOpenProject"),
      imgUrl: projRyde,
      projectUrl: "#",
      projectUrlGit: "https://github.com/YoexRep/UberClone",
      buttonTextDemo: textElement("Projects.BtnDemoProject"),
      buttonTextCode: textElement("Projects.BtnCodeProject"),
      buttonTextNoDemo: textElement("Projects.BtnNoDemoProject"),
      buttonTextNoCode: textElement("Projects.BtnNoCodeProject"),
      galleryItems: [
        {
          type: "video",
          src: "https://youtu.be/0vrflbusMJY",
          titleItem:  textElement("GalleryItems.UberClone.UberCloneTutorial.titleItem"),
          descriptionItem: textElement("GalleryItems.UberClone.UberCloneTutorial.descriptionItem"),
          colorFullscreenButton: "#FFFFFF",
        },
        {
          type: "image",
          src: ClerkDashboard,
          titleItem:  textElement("GalleryItems.UberClone.Imagen1.titleItem"),
          descriptionItem: textElement("GalleryItems.UberClone.Imagen1.descriptionItem"),
          colorFullscreenButton: "#808080",
        },
        {
          type: "image",
          src: NeonDbImg,
          titleItem:  textElement("GalleryItems.UberClone.Imagen2.titleItem"),
          descriptionItem: textElement("GalleryItems.UberClone.Imagen2.descriptionItem"),
          colorFullscreenButton: "#FFFFFF",
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
