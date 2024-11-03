import { Container, Row, Col } from "react-bootstrap";

import linkedinIcon from '../assets/img/linkedin-logo.svg';

import githubIcon from '../assets/img/github-logo.svg';

import youtubeIcon from '../assets/img/Youtube.svg';
import {useTranslation} from "react-i18next";

export const Footer = () => {

  const [textElement, i18n] = useTranslation("global");
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       
         
          <Col size={12} sm={12} className="text-star">
          <br></br>
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/yoel-antonio-torres-marte-291b99225/" target="_blank" ><img src={linkedinIcon} alt="linkedin" /></a>
        
                <a href="https://github.com/YoexRep" target="_blank"><img src={githubIcon} alt="instagram" /></a>

                <a href="https://www.youtube.com/@LearnWtutorials" target="_blank"><img src={youtubeIcon} alt="youtube" /></a>
              </div>
            <p>{textElement("Footer.LblCopyRight")}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
