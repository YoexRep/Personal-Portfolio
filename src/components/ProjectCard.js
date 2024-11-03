import { Col } from "react-bootstrap";
import {useTranslation} from "react-i18next"
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description,tecnologies,buttonText, imgUrl , projectUrl }) => {

  const [textElement, i18n] = useTranslation("global");

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}  

      
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
     
          <p className="proj-card-p">{tecnologies}</p>

              <div className="proj-card-btn">
                    <a href={projectUrl} target="_blank"  >
                        <button className="a-projectcards-deploy">
                           {buttonText}  <ArrowRightCircle size={25} />
                       </button>
                      </a>
              </div>
        </div>

       
      </div>
    </Col>
  )
}
