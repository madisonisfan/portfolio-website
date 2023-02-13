import { Container, Row, Col, Button } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Player } from "video-react";
import Image from "react-bootstrap/Image";
import Seperator from "../../components/Seperator";

const ProjectDetailModalBody = ({ project, toggleModal }) => {
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
    <div>
      {/*<div>{dateRange}</div>*/}

      <ul className="project-main-tech-list" style={{ marginTop: "0px" }}>
        <div className="d-flex project-main-tech-list">
          <Seperator /> {mainTech}
        </div>
      </ul>

      <div
        className="project-description-list-div"
        style={{
          backgroundColor: "#38324f",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <ul>{descriptionList}</ul>
      </div>

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

export default ProjectDetailModalBody;

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
