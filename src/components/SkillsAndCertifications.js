import { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Skills } from "./Skills";
import { Certifications } from "./Certifications";

export const SkillsAndCertifications = () => {
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="skills-certifications" id="skills-certifications">
      <Container>
        <div className="skill-certifications-bx wow zoomIn">
          <div className="switch-menu">
            <button
              className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
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

          <p className="tab-description">
            {activeTab === "skills"
              ? t("Skills.LblDescripcion")
              : t("Certifications.LblDescripcion")}
          </p>

          {activeTab === "skills" ? <Skills /> : <Certifications />}
        </div>
      </Container>
    </section>
  );
};
