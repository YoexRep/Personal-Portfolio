import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Perfil.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {useTranslation} from "react-i18next"
import { Skills } from "./Skills";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const period = 1000;
  const [textElement, i18n] = useTranslation("global");
  const toRotate = textElement("Banner.LblDataRote", { returnObjects: true });

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className="bannerContainer"> 
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">{textElement("Banner.BtnWelcome")}</span>
                <h1>{textElement("Banner.LblGretting")} <span className="txt-rotate" dataPeriod="1000" data-rotate={textElement("Banner.LblDataRote")}><span className="wrap">{text}</span></span></h1>
                  <p>{textElement("Banner.LblDescription")}</p>


                  {textElement("Banner.BtnCV") === "Download my CV" ?
                        <a href="https://drive.google.com/uc?export=download&id=1lvzcusyZuTT1leuSkyUyb8cUF-c7CvfW" className="a-link-down" rel="noopener noreferrer" download>
                        <button>
                             {textElement("Banner.BtnCV")} <ArrowRightCircle size={25} />
                       </button>
                      </a>
                  
                  
                  : 
                  
                  <a href="https://drive.google.com/uc?export=download&id=1L2XUJuucFUZRm6miVHNKAzKXTET2aRcO" className="a-link-down" rel="noopener noreferrer" download>
                  <button>
                       {textElement("Banner.BtnCV")} <ArrowRightCircle size={25} />
                 </button>
                 </a>
                  }
                
                  
              </div>}
            </TrackVisibility>
          
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>

    
      </Container>


    </section>

    <Skills/>

    </div>
  )
}
