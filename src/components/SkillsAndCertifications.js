import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Skills } from "./Skills";
import { Certifications } from "./Certifications";
import "animate.css";

export const SkillsAndCertifications = () => {
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="skills-certifications" id="skills-certifications">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-certifications-bx wow zoomIn">
              {/* 🔘 Switch Tabs */}
              <div className="switch-menu flex justify-center mb-4">
                <button
                  className={`tab-btn ${
                    activeTab === "skills" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("skills")}
                >
                  {t("Skills.LblSkills")}
                </button>
                <button
                  className={`tab-btn ${
                    activeTab === "certifications" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("certifications")}
                >
                  {t("Certifications.LblCertifications")}
                </button>
              </div>

              {/* 🧠 Content */}
              <div className="tab-content animate__animated animate__fadeIn">
                {activeTab === "skills" ? <Skills /> : <Certifications />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
