import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Seperator from "../../components/Seperator";
import ProjectDetailModal from "./ProjectDetailModalBody";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

const SmallProjectDisplay = ({ project }) => {
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

  const [isDetailModalOpen, toggleDetailModal] = useState(false);

  //   const [{ scale }, api] = useSpring(() => ({
  //     scale: 1,
  //     //config: { mass: 5, tension: 350, friction: 40 }
  //   }));

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
      // onMouseOver={() => {
      //   if (window.innerWidth > 576) {
      //     api({ scale: 1.1 });
      //   }
      // }}
      // onMouseOut={() => {
      //   if (window.innerWidth > 576) {
      //     api({ scale: 1 });
      //   }
      // }}
      // style={{
      //   scale: to([scale], (s) => s),
      // }}
      >
        <Card
          className="small-project-card"
          onClick={() => toggleDetailModal(!isDetailModalOpen)}
        >
          <Card.Title className="project-title">{title}</Card.Title>
          <Card.Subtitle className="project-subtitle">{subtitle}</Card.Subtitle>
          <Card.Text className="project-description">{description}</Card.Text>

          <button
            className="read-more-butt"
            onClick={() => toggleDetailModal(true)}
          >
            Read More
          </button>
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

export default SmallProjectDisplay;
