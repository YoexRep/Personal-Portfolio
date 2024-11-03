import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/ContactMe2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Contact = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false); // Estado para el mensaje de éxito
  const [isSending, setIsSending] = useState(false); // Nuevo estado para controlar la animación del botón
  const [textElement, i18n] = useTranslation("global");

  // Función para enviar el correo
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Iniciar la animación de desaparición del botón

    emailjs
      .sendForm("service_enbnrnc", "template_n04y04r", form.current, "hLwdesY-gXnXeFft7")
      .then(
        () => {
          console.log("SUCCESS!");
          setTimeout(() => {
            setShowSuccess(true); // Mostrar el mensaje de éxito después de que el botón desaparece
            // Ocultar el mensaje de éxito después de 3 segundos y volver a mostrar el botón
            setTimeout(() => {
              setShowSuccess(false);
              setIsSending(false); // Volver a mostrar el botón
            }, 3000);
          }, 1000); // Añadir un pequeño retraso para la animación del botón
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false); // Volver a mostrar el botón si falla
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{textElement("Contact.Title")}</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} className="px-1">
                        <input
                          type="text"
                          name="user_name"
                          placeholder={textElement("Contact.InputFirstName")}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          placeholder={textElement("Contact.InputEmailAddress")}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          placeholder={textElement("Contact.InputMessage")}
                          style={{ width: "100%", height: "180px" }}
                          required
                        />
                        {/* Botón con animación de desaparición solo cuando se hace clic en enviar */}
                        <button
                          type="submit"
                          className={isSending ? "animate__animated animate__fadeOut" : ""}
                          style={{
                            animationDuration: "1s", // Duración de la animación
                            display: isSending ? "none" : "inline-block", // Ocultar el botón después de la animación
                          }}
                        >
                          {textElement("Contact.BtnSend")} <ArrowRightCircle size={25} />
                        </button>
                      </Col>
                    </Row>
                  </form>

                  {/* Mostrar mensaje de éxito */}
                  {showSuccess && (
                    <div className="animate__animated animate__fadeInUp success-message">
                      ¡Correo enviado con éxito!
                    </div>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
