import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import JavaScriptoCert from "../assets/img/JavaScriptoCert.webp";
import ResposiveWebCert from "../assets/img/ResposiveWebCert.webp";
import VerifiedInternational from "../assets/img/VerifiedInternational.webp";

export const Certifications = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <Carousel
      responsive={responsive}
      infinite
      className="owl-carousel owl-theme certifications-slider"
    >
      <div className="item certification-card">
        <a
          href="https://badges.wes.org/Evidence?i=a8105f9c-0ac0-4705-b016-58a5f4d318a1&type=us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={VerifiedInternational}
            alt="Verified International Academic Qualifications"
            className="carousel-image"
          />
          <h5>Verified International Academic Qualifications</h5>
        </a>
      </div>

      <div className="item certification-card">
        <a
          href="https://www.freecodecamp.org/certification/yoex/javascript-algorithms-and-data-structures"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={JavaScriptoCert}
            alt="JavaScript Algorithms and Data Structures"
            className="carousel-image"
          />
          <h5>JavaScript Algorithms & Data Structures</h5>
        </a>
      </div>

      <div className="item certification-card">
        <a
          href="https://www.freecodecamp.org/certification/yoex/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ResposiveWebCert}
            alt="Responsive Web Design"
            className="carousel-image"
          />
          <h5>Responsive Web Design</h5>
        </a>
      </div>
    </Carousel>
  );
};
