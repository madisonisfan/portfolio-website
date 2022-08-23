import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  CardFooter,
  Carousel,
  CardImg,
} from "reactstrap";

//import ImageOne from "../../app/assets/images/TrainrAI_Images/TrainrAI_Logo.png";
import ImageOne from "../../app/assets/images/sample_images/cartoonWebsite.jpg";

import { EventImageCarousel } from "./EventImageCarousel";

export const EventDisplay = ({ event }) => {
  const { title, dateRange, description, photos, id, subtitle, technology } =
    event;

  const tech = technology.map((tech) => {
    return <li className="event-tech">{tech}</li>;
  });

  return (
    <Card className="event-card" key={id}>
      <Row>
        <Col xs="6">
          <CardBody style={{ padding: 0 }}>
            <CardTitle className="event-title">{title}</CardTitle>
            <CardSubtitle className="event-subtitle">{subtitle}</CardSubtitle>
            <CardSubtitle className="event-date">{dateRange}</CardSubtitle>
            <CardText className="event-description">{description}</CardText>
          </CardBody>
        </Col>
        <Col>
          <img src={ImageOne} className="event-image img-fluid" />
        </Col>
        <Col xs="12">{tech}</Col>
      </Row>
    </Card>
  );
};

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
