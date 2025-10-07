import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import reactImg from "../assets/img/React.png";
import AWS from "../assets/img/AWS.png";
import PostgresIcon from "../assets/img/postgresSQL.png";
import NodeJsIcon from "../assets/img/nodejs.png";
import CsharpIcon from "../assets/img/Csharp.png";
import ReactNative from "../assets/img/ReactNative.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      className="owl-carousel owl-theme skill-slider"
    >
      <div className="item">
        <img src={reactImg} alt="React / Nextjs" className="carousel-image" />
        <h5>React / Next.js</h5>
      </div>
      <div className="item">
        <img src={CsharpIcon} alt="C#" className="carousel-image" />
        <h5>C# / Visual Studio</h5>
      </div>
      <div className="item">
        <img src={AWS} alt="AWS" className="carousel-image" />
        <h5>Amazon Web Services</h5>
      </div>
      <div className="item">
        <img src={ReactNative} alt="React Native" className="carousel-image" />
        <h5>React Native / Expo</h5>
      </div>
      <div className="item">
        <img src={NodeJsIcon} alt="Node.js" className="carousel-image" />
        <h5>Node.js / Express</h5>
      </div>
      <div className="item">
        <img src={PostgresIcon} alt="PostgresSQL" className="carousel-image" />
        <h5>Postgres SQL</h5>
      </div>
    </Carousel>
  );
};
