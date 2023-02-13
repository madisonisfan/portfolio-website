import { Container, Row, Col, Button } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Player } from "video-react";
import Image from "react-bootstrap/Image";

const EducationDetailModal = ({ project, toggleModal }) => {
  const {
    title,
    //dateRange,
    descriptionPoints,
    images,
    id,
    subtitle,
    allTechnology,
  } = project;

  const descriptionList = descriptionPoints.map((point) => {
    return <li className="project-description-point">{point}</li>;
  });

  return (
    <div style={styles.mainContainer}>
      <div className="d-flex" style={styles.header}>
        <div style={styles.title}>{title}</div>
        <Button style={styles.closeButton} onClick={() => toggleModal(false)}>
          {" "}
          X
        </Button>
      </div>
      {/*<div>{dateRange}</div>*/}
      <div style={styles.descriptionPoints}>{descriptionList}</div>
      {/*
 {event.id === 1 && <EventVideoPlayer video={event.video} />}

      {event.id !== 1 && <EventImageCarousel photos={photos} />}
        */}

      <EventImageCarousel photos={images} />
    </div>
  );
};

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
  },
  title: {
    color: "#c9b7db",
    fontSize: "25px",
  },
  descriptionPoints: {
    paddingTop: "10px",
    paddingBottom: "30px",
  },
  closeButton: {
    backgroundColor: "#171729",
    borderColor: "#171729",
    fontSize: "20px",
  },
};

export default ProjectDetailModal;
