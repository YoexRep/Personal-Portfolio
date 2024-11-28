import { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { ArrowRightCircle, Fullscreen } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  tecnologies,
  buttonText,
  buttonTextDemo,
  buttonTextCode,
  buttonTextNoDemo,
  buttonTextNoCode,
  imgUrl,
  projectUrl,
  projectUrlGit,
  mobilAppButton = false,
  imgQR,
  titleQR,
  galleryItems,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showFullScreenModal, setShowFullScreenModal] = useState(false); // Estado para modal de ampliación
  const [showQRModal, setShowQRModal] = useState(false); // Estado para QR modal y descargar APP
  const [selectedItem, setSelectedItem] = useState(galleryItems[0]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenFullScreenModal = () => setShowFullScreenModal(true);
  const handleCloseFullScreenModal = () => setShowFullScreenModal(false);

  const handleOpenQRModal = () => setShowQRModal(true);
  const handleCloseQRModal = () => setShowQRModal(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p className="proj-card-p">{tecnologies}</p>
          <div className="proj-card-btn">
            <button className="a-projectcards-deploy" onClick={handleOpenModal}>
              {buttonText}
              <ArrowRightCircle size={25} style={{ marginLeft: "5px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Principal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "rgba(0, 36, 60, 1)",
            color: "#fff",
          }}
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "linear-gradient(90.21deg, #00243c -5.91%, #003f63 111.58%)",
            color: "#fff",
          }}
        >
          <div className="d-flex" style={{ height: "100%" }}>
            {/* Galería izquierda */}
            <div className="pe-4 position-relative" style={{ width: "50%" }}>
              <div className="main-display mb-3 position-relative">
                {selectedItem.type === "video" ? (
                  <iframe
                    width="100%"
                    height="300px"
                    src={convertToEmbedUrl(selectedItem.src)}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="position-relative">
                    <img
                      src={selectedItem.src}
                      alt="Selected"
                      className="w-100"
                      style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                    {/* Botón de ampliar solo para imágenes */}
                    <Fullscreen
                      size={25}
                      className="position-absolute"
                      style={{
                        bottom: "10px",
                        right: "10px",
                        cursor: "pointer",
                        color: selectedItem.colorFullscreenButton,
                      }}
                      onClick={handleOpenFullScreenModal}
                    />
                  </div>
                )}
              </div>
              <div className="thumbnail-gallery d-flex justify-content-center flex-wrap gap-2">
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      selectedItem === item ? "active-thumbnail" : ""
                    }`}
                    onClick={() => setSelectedItem(item)}
                    style={{
                      cursor: "pointer",
                      border:
                        selectedItem === item
                          ? "2px solid #007bff"
                          : "2px solid transparent",
                    }}
                  >
                    {item.type === "video" ? (
                      <img
                        src={`https://img.youtube.com/vi/${new URL(item.src).searchParams.get("v")}/0.jpg`}
                        alt="Video Thumbnail"
                        className="img-thumbnail"
                        style={{ width: "100px", height: "70px" }}
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt="Image Thumbnail"
                        className="img-thumbnail"
                        style={{ width: "100px", height: "70px" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sección derecha */}
            <div className="ps-4 d-flex flex-column" style={{ width: "50%" }}>
              <h5 className="mb-4">{selectedItem.titleItem}</h5>
              <p>{selectedItem.descriptionItem}</p>
              <div className="mt-auto">
                <div className="jmt-4 d-flex gap-3 flex-wrap justify-content-center">
                  {projectUrl === "#" ? (
                    <Button variant="primary" disabled>
                      {buttonTextNoDemo}
                    </Button>
                  ) : 
                      mobilAppButton===false ?  (
                        <Button
                          variant="primary"
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {buttonTextDemo}
                        </Button>
                      ) : 
                      (
                        <Button
                          variant="primary"             
                        
                          onClick={handleOpenQRModal}
                        >
                          Apk
                        </Button>

                        
                      ) 
                    
                         
                 
                  
                  
                  }
                  {projectUrlGit === "#" ? (
                    <Button variant="secondary" disabled>
                      {buttonTextNoCode}
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      href={projectUrlGit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {buttonTextCode}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      

      {/* Modal para ampliación */}
      <Modal
        show={showFullScreenModal}
        onHide={handleCloseFullScreenModal}
        size="xl"
        centered
      >
        <Modal.Body
          style={{
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={selectedItem.src}
            alt="Full View"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>


       {/* Modal para QR */}
       <Modal
        show={showQRModal}
        onHide={handleCloseQRModal}
            size="sm"
        centered
      >


      <Modal.Header
          
          style={{
            backgroundColor: "#006400",
            color: "#fff",
          }}
        >
          <Modal.Title>{titleQR}</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "#008000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imgQR}
            alt="Full View"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            
           
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>
    </Col>
  );
};

const convertToEmbedUrl = (url) => {
  const videoIdMatch = url.match(
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }
  return url;
};
