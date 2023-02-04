import Card from "react-bootstrap/Card";
import { Container, Row, Col, Modal } from "reactstrap";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Seperator from "../../components/Seperator";
import ProjectDetailModal from "./ProjectDetailModal";

const ProjectDisplay = ({ project }) => {
  const { id, title, description, images, mainTechnology } = project;
  console.log(`project: `, mainTechnology);
  const [belowLg, setBelowLg] = useState(false);
  const [isDetailModalOpen, toggleDetailModal] = useState(false);

  const styles = {
    projectImage: {
      marginRight: id % 2 == 0 ? "auto" : "0",
      marginLeft: id % 2 == 0 ? "0" : "auto",
      maxWidth: "60%",
      maxHeight: "350px",
    },
    projectOverlay: {
      //height: "450px",
      //alignItems: "center",
      justifyContent: id % 2 == 0 ? "end" : "start",
    },
    projectTitle: {
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },

    projectMainTechList: {
      justifyContent: id % 2 == 0 ? "end" : "start",
      marginTop: "10px",
    },
    projectDescriptionRow: {
      justifyContent: id % 2 == 0 ? "end" : "start",
    },
    projectDescriptionText: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },
    /*projectDate: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },*/
    /*
    projectSubtitle: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },*/

    projectRow: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },

    readMoreButtonRow: {
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },
  };

  useEffect(() => {
    if (window.innerWidth < 992) {
      setBelowLg(true);
    } else if (window.innerWidth >= 992) {
      setBelowLg(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setBelowLg(true);
      } else if (window.innerWidth >= 992) {
        setBelowLg(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mainTech = mainTechnology.map((tech) => {
    console.log(`tech`, tech);
    return (
      <li className="project-tech">
        <div className="d-flex">
          {tech} <Seperator />
        </div>
      </li>
    );
  });

  return (
    <>
      <Card className="project-card">
        <Image
          src={images[0]}
          className="project-image"
          style={styles.projectImage}
          rounded
        />
        <Card.ImgOverlay className="project-card-img-overlay">
          <Container className="p-0" styles={styles.projectOverlay}>
            <Row style={styles.projectRow}>
              <Col xs={12}>
                <div
                  className="project-title d-flex"
                  style={styles.projectTitle}
                >
                  <div className="d-none d-sm-block">|</div>
                  <div
                    className="ps-0 ps-sm-3 pe-3"
                    style={{ paddingTop: "2px" }}
                  >
                    <p>{title}</p>
                  </div>
                  <div className="d-none d-sm-block"> | </div>
                </div>

                {/*<Card.Subtitle
                className="project-subtitle"
                style={styles.projectSubtitle}
              >
                {subtitle}
  </Card.Subtitle>*/}
                {/*<Card.Subtitle className="event-date" style={styles.eDate}>
                {dateRange}
  </Card.Subtitle>*/}
                <Row className="d-flex" style={styles.projectDescriptionRow}>
                  <Col lg={8}>
                    <Card.Text
                      className="project-description"
                      style={styles.projectDescriptionText}
                    >
                      {description}
                    </Card.Text>
                  </Col>
                </Row>

                <ul className="project-main-tech-list">
                  <div
                    className="d-flex project-main-tech-list"
                    style={styles.projectMainTechList}
                  >
                    <Seperator /> {mainTech}
                  </div>
                </ul>
                <Row style={styles.readMoreButtonRow}>
                  <Col xs={5}>
                    {" "}
                    <button
                      className="read-more-butt"
                      onClick={() => toggleDetailModal(true)}
                    >
                      Read More
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
      <Modal
        returnFocusAfterClose
        centered
        isOpen={isDetailModalOpen}
        toggle={() => toggleDetailModal(!isDetailModalOpen)}
        size="xl"
      >
        <ProjectDetailModal project={project} toggleModal={toggleDetailModal} />
      </Modal>
    </>
  );
};

export default ProjectDisplay;
