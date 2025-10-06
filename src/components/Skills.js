import reactImg from "../assets/img/React.png";
import AWS from "../assets/img/AWS.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostgresIcon from "../assets/img/postgresSQL.png";
import NodeJsIcon from "../assets/img/nodejs.png";
import CsharpIcon from "../assets/img/Csharp.png";
import ReactNative from "../assets/img/ReactNative.png";

import { useTranslation } from "react-i18next";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [textElement, i18n] = useTranslation("global");

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-certifications-bxwow zoomIn">
              {/* <h2>{textElement("Skills.LblSkills")}</h2> */}
              <p>{textElement("Skills.LblDescripcion")}</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactImg} alt="Image" className="carousel-image" />
                  <h5>React / Nextjs</h5>
                </div>
                <div className="item">
                  <img
                    src={CsharpIcon}
                    alt="Image"
                    className="carousel-image"
                  />
                  <h5>C# / Visual Studio</h5>
                </div>
                <div className="item">
                  <img src={AWS} alt="Image" className="carousel-image" />
                  <h5>Amazon web services</h5>
                </div>
                <div className="item">
                  <img
                    src={ReactNative}
                    alt="Image"
                    className="carousel-image"
                  />
                  <h5>React Native / Expo</h5>
                </div>
                <div className="item">
                  <img
                    src={NodeJsIcon}
                    alt="Image"
                    className="carousel-image"
                  />
                  <h5>NodeJs / Express</h5>
                </div>

                <div className="item">
                  <img
                    src={PostgresIcon}
                    alt="Image"
                    className="carousel-image"
                  />
                  <h5>Postgres SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={backGroundSkills} alt="Image" />  */}
    </section>
  );
};
