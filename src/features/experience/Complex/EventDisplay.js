import {
  Container,
  Row,
  Col,
  Carousel,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seperator from "../../../components/Seperator";
import EventDetailModal from "./EventDetailModal";
//import Divider from '@mui/material/Divider';

import { Divider } from "@mui/material";

//import ImageOne from "../../app/assets/images/TrainrAI_Images/TrainrAI_Logo.png";
//import ImageOne from "../../../app/assets/images/sample_images/cartoonWebsite.jpg";

import { EventImageCarousel } from "./EventImageCarousel";
import { PageTitle } from "../../../components/PageTitle";

export const EventDisplay = ({ event, isBelowMd }) => {
  const { title, dateRange, description, photos, id, subtitle, technology } =
    event;
  const [belowLg, setBelowLg] = useState(false);
  const [isDetailOpen, toggleDetailOpen] = useState(false);

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

  const tech = technology.map((tech) => {
    return (
      <li className="event-tech">
        <div className="d-flex">
          {tech} <Seperator />
        </div>
      </li>
    );
  });

  const styles = {
    eventImage: {
      marginRight: id % 2 == 0 ? "auto" : "0",
      marginLeft: id % 2 == 0 ? "0" : "auto",
      maxWidth: "60%",
      maxHeight: "350px",
    },
    eventOverlay: {
      //height: "450px",
      //alignItems: "center",
      justifyContent: id % 2 == 0 ? "end" : "start",
    },
    eventTitle: {
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },
    eventTechList: {
      justifyContent: id % 2 == 0 ? "end" : "start",
      marginTop: "10px",
    },
    eventDescriptionRow: {
      justifyContent: id % 2 == 0 ? "end" : "start",
    },
    eventDescriptionText: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },
    eventDate: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },
    eventSubtitle: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },

    eventRow: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },

    readMoreButtonRow: {
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },
  };
  return (
    //{isBelowMd ? "event-card-below" : "event-card-above"}
    // <div onClick={() => toggleDetailOpen(true)}>
    <>
      <div>
        {/*<Link to={`${id}`} style={{ paddingBottom: "20px" }}>*/}
        <Card className="event-card" key={id}>
          <Image
            //src={ImageOne}
            src={photos[0]}
            className="event-image"
            style={styles.eventImage}
            rounded
          />
          <Card.ImgOverlay className="event-card-overlay">
            <Container className="p-0" style={styles.eventOverlay}>
              <Row style={styles.eventRow}>
                <Col xs={12}>
                  <div className="event-title d-flex" style={styles.eventTitle}>
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
                    className="event-subtitle"
                    style={styles.eventSubtitle}
                  >
                    {subtitle}
                  </Card.Subtitle>
                  <Card.Subtitle
                    className="event-date"
                    style={styles.eventDate}
                  >
                    {dateRange}
                  </Card.Subtitle>
                  <Row className="d-flex" style={styles.eventDescriptionRow}>
                    <Col lg={8}>
                      <Card.Text
                        className="event-description"
                        style={styles.eventDescriptionText}
                      >
                        {description}
                      </Card.Text>
                    </Col>
                  </Row>

                  <ul className="event-tech-list">
                    <div
                      className="d-flex event-tech-list"
                      style={styles.eventTechList}
                    >
                      <Seperator /> {tech}
                    </div>
                  </ul>
                  <Row style={styles.readMoreButtonRow}>
                    <Col xs={5}>
                      {" "}
                      <button
                        className="read-more-butt"
                        onClick={() => toggleDetailOpen(true)}
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
        {/*</Link>*/}
      </div>
      <Modal
        returnFocusAfterClose
        centered
        isOpen={isDetailOpen}
        toggle={() => toggleDetailOpen(!isDetailOpen)}
        size="xl"
      >
        <EventDetailModal event={event} toggleModal={toggleDetailOpen} />
      </Modal>
    </>
  );
};

/*
<Card className="event-card " key={id}>
      <Card.Img
        src={ImageOne}
        className="event-image"
        style={styles.eventImage}
      />
      <Card.ImgOverlay className="event-card-overlay" style={styles.eventText}>
        <Container fluid className="p-0">
          <Row className="event-row" style={styles.eventText}>
            <Col xs="12" md="8" style={{ textAlign: "right" }}>
              <Card.Title className="event-title" style={styles.eventTitle}>
                {title}
              </Card.Title>
              <Card.Subtitle
                className="event-subtitle"
                style={styles.eventSubtitle}
              >
                {subtitle}
              </Card.Subtitle>
              <Card.Subtitle className="event-date" style={styles.eventDate}>
                {dateRange}
              </Card.Subtitle>
              <Card.Text
                className="event-description"
                style={styles.eventDescription}
              >
                {description}
              </Card.Text>
              <ul className="event-tech-list" style={styles.eventTech}>
                {tech}
              </ul>
            </Col>
          </Row>
        </Container>
      </Card.ImgOverlay>
    </Card>
*/

/*<Col>
          <img src={ImageOne} className="event-image img-fluid" />
        </Col>
*/

/*<Col>
          <EventImageCarousel photos={photos} />
        </Col>*/

/*

<Card className="event-card">
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardSubtitle>{dateRange}</CardSubtitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>

    */
