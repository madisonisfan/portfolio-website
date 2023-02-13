import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Seperator from "../../components/Seperator";
import ProjectDetailModal from "./ProjectDetailModalBody";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

const ProjectDisplay = ({ project }) => {
  const {
    id,
    title,
    subtitle,
    description,
    images,
    mainTechnology,
    gitHubLink,
  } = project;
  const [toggleState, toggle] = useState(true);
  const [belowLg, setBelowLg] = useState(false);
  const [isDetailModalOpen, toggleDetailModal] = useState(false);

  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    //config: { mass: 5, tension: 350, friction: 40 }
  }));

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

    projectSubtitle: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },

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
      <animated.div
        onMouseOver={() => {
          if (window.innerWidth > 576) {
            api({ scale: 1.1 });
          }
        }}
        onMouseOut={() => {
          if (window.innerWidth > 576) {
            api({ scale: 1 });
          }
        }}
        style={{
          scale: to([scale], (s) => s),
        }}
      >
        <Card
          className="project-card"
          onClick={() => toggleDetailModal(!isDetailModalOpen)}
        >
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

                  <Card.Subtitle
                    className="project-subtitle"
                    style={styles.projectSubtitle}
                  >
                    {subtitle}
                  </Card.Subtitle>
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
      </animated.div>
      <Modal
        centered
        size="xl"
        show={isDetailModalOpen}
        onHide={() => toggleDetailModal(!isDetailModalOpen)}
        dialogClassName="modal-main-container"
      >
        <div
          className="d-flex d-block d-lg-none justify-content-between"
          style={{
            paddingTop: "10px",
            paddingBottom: "0px",
            paddingRight: "15px",
            paddingLeft: "15px",
            color: "#8b50e3",
          }}
        >
          <i
            className="fa fa-long-arrow-left"
            style={{ fontSize: "30px" }}
            onClick={() => toggleDetailModal(!isDetailModalOpen)}
          />
          {gitHubLink && (
            <a href={gitHubLink} style={{ color: "#8b50e3" }}>
              GitHub
            </a>
          )}
        </div>

        <div
          className="d-flex project-modal-header justify-content-between align-items-center"
          style={{ paddingTop: "5px" }}
        >
          <Modal.Title className="project-modal-title" style={{}}>
            {title}
          </Modal.Title>
          <div className="d-flex" style={{ flexDirection: "" }}>
            {gitHubLink && (
              <div className="d-none d-lg-block">
                <GitHubLink gitHubLink={gitHubLink} />{" "}
              </div>
            )}
            <Button
              onClick={() => toggleDetailModal(!isDetailModalOpen)}
              className="project-modal-close-button d-none d-lg-block "
              style={{
                marginLeft: "15px",
                padding: "0px",
                height: "40px",
                fontSize: "30px",
                //color: "#8b50e3",
              }}
            >
              X
            </Button>
          </div>
        </div>

        <Modal.Body>
          <ProjectDetailModal project={project} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const GitHubLink = ({ gitHubLink }) => {
  return (
    <div
      // className="d-flex justify-content-center"
      style={{ paddingLeft: "20px", alignSelf: "flex-end" }}
      // style={{ width: "100%" }}
    >
      <a href={gitHubLink} style={{ color: "#8b50e3" }}>
        <i
          className="fa fa-github"
          style={{ fontSize: "40px", marginBottom: "10px" }}
        />
      </a>
    </div>
  );
};

export default ProjectDisplay;
