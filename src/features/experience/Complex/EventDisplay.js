import { Container, Row, Col, Carousel } from "reactstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import ImageOne from "../../app/assets/images/TrainrAI_Images/TrainrAI_Logo.png";
//import ImageOne from "../../../app/assets/images/sample_images/cartoonWebsite.jpg";

import { EventImageCarousel } from "./EventImageCarousel";
import { PageTitle } from "../../../components/PageTitle";

const Seperator = () => {
  return (
    <div
      style={{
        paddingBottom: "3px",
        paddingLeft: "10px",
        paddingRight: "10px",
        color: "#c9b7db",
      }}
    >
      |
    </div>
  );
};

export const EventDisplay = ({ event, isBelowMd }) => {
  const { title, dateRange, description, photos, id, subtitle, technology } =
    event;

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
      marginLeft: id % 2 == 0 ? "auto" : "0",
      maxWidth: "60%",
      maxHeight: "350px",
    },
    eventOverlay: {
      //height: "450px",
      //alignItems: "center",
      justifyContent: id % 2 == 0 ? "start" : "end",
    },
    eventTitle: {
      justifyContent: id % 2 == 0 ? "start" : "end",
    },
    eventTechList: {
      justifyContent: id % 2 == 0 ? "start" : "end",
    },
    eventDescription: {
      textAlign: id % 2 == 0 ? "left" : "right",
    },
    eventDate: {
      textAlign: id % 2 == 0 ? "left" : "right",
    },
    eventSubtitle: {
      textAlign: id % 2 == 0 ? "left" : "right",
    },
  };
  return (
    //{isBelowMd ? "event-card-below" : "event-card-above"}
    <Link to={`${id}`} style={{ paddingBottom: "20px" }}>
      <Card className="event-card" key={id}>
        <Image
          //src={ImageOne}
          src={photos[0]}
          className="event-image"
          style={styles.eventImage}
          rounded
        />
        <Card.ImgOverlay className="event-card-overlay">
          <Container className="p-0">
            <Row style={styles.eventOverlay}>
              <Col xs="12" lg="8">
                <div className="event-title d-flex" style={styles.eventTitle}>
                  <div>|</div>

                  <div
                    style={{
                      paddingTop: "2px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <p>{title}</p>
                  </div>
                  <div> | </div>
                </div>
                <Card.Title></Card.Title>
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

                <ul className="event-tech-list">
                  <div
                    className="d-flex event-tech-list"
                    style={styles.eventTechList}
                  >
                    <Seperator /> {tech}
                  </div>
                </ul>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </Link>
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
