import { Container, Row, Col, Button } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Player } from "video-react";
import Image from "react-bootstrap/Image";
import Seperator from "../../components/Seperator";

const ProjectDetailModal = ({ project, toggleModal }) => {
  const {
    title,
    //dateRange,
    descriptionPoints,
    images,
    id,
    subtitle,
    allTechnology,
    gitHubLink,
  } = project;

  const mainTech = allTechnology.map((tech) => {
    return (
      <li className="project-tech">
        <div className="d-flex">
          {tech} <Seperator />
        </div>
      </li>
    );
  });

  const descriptionList = descriptionPoints.map((point) => {
    return <li className="project-description-point">{point}</li>;
  });

  return (
    <div style={styles.mainContainer}>
      <div className="d-flex" style={styles.header}>
        <div style={styles.title}>{`{${title}}`}</div>
        <Button style={styles.closeButton} onClick={() => toggleModal(false)}>
          X
        </Button>
      </div>

      {/*<div>{dateRange}</div>*/}

      <ul className="project-main-tech-list" style={{ marginTop: "15px" }}>
        <div
          className="d-flex project-main-tech-list"
          style={styles.projectMainTechList}
        >
          <Seperator /> {mainTech}
        </div>
      </ul>

      <div
        style={{
          backgroundColor: "#38324f",

          borderRadius: "10px",
          marginTop: "20px",
          // marginBottom: "20px",
        }}
      >
        <ul style={styles.descriptionPoints}>{descriptionList}</ul>
      </div>
      {gitHubLink && (
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <a href={gitHubLink} style={{ color: "#8b50e3" }}>
            <i
              className="fa fa-github fa-lg"
              style={{ fontSize: "30px", marginBottom: "10px" }}
            />
          </a>
        </div>
      )}

      {/*
 {event.id === 1 && <EventVideoPlayer video={event.video} />}

      {event.id !== 1 && <EventImageCarousel photos={photos} />}
        */}

      <EventImageCarousel photos={images} />
    </div>
  );
};

const EventImageCarousel = ({ photos: images }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    console.log(`handle select`);
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      // style={{ marginTop: "30px" }}
    >
      {images.map((img, index) => {
        return (
          <Carousel.Item>
            <img
              className="d-block"
              src={img}
              alt={`img ${index}`}
              style={{
                maxHeight: "500px",
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                objectFit: "contain",
              }}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: "#171729",
    color: "#c9b7db",
    fontFamily: "lft-etica-mono",
    padding: "20px",

    // borderRadius: "25px",
    //width: "1000px",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "top",
  },
  title: {
    //color: "#c9b7db",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
  },
  descriptionPoints: {
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "20px",
    fontWeight: "400",
  },
  closeButton: {
    backgroundColor: "#171729",
    borderColor: "#171729",
    fontSize: "20px",
  },
};

export default ProjectDetailModal;

const EventVideoPlayer = ({ video }) => {
  return (
    <>
      <div
        className="d-flex"
        style={{
          //textAlign: "center",
          fontWeight: "500",
          paddingBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={
            {
              //textAlign: "center",
              //marginRight: "10px",
            }
          }
        >
          Honors Project Submission
        </div>
        <div>
          <a
            href="https://github.com/madisonisfan/meaplanner-react-integration"
            style={{ color: "#8b50e3" }}
          >
            <i className="fa fa-github fa-lg" />
          </a>
        </div>
      </div>
      <Player>
        <source src={video} />
      </Player>
    </>
  );
};
