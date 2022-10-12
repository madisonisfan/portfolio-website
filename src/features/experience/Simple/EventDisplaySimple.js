import { Container, Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ImageOne from "../../../app/assets/images/HarvardX_Certificate.png";

const EventDisplaySimple = ({ event }) => {
  const { title, dateRange, description, photos, id, subtitle, technology } =
    event;

  const tech = technology.map((tech) => {
    return (
      <li className="event-tech-simple" style={{ whiteSpace: "nowrap" }}>
        {tech}
      </li>
    );
  });

  return (
    <Container style={{ padding: 0 }}>
      <Container
        style={{ padding: 0 }}
        className="event-container-simple d-flex flex-row "
      >
        <Container style={{ padding: 0 }}>
          <Row>
            <Col className="event-title-simple">{title}</Col>
          </Row>
          <Row>
            <Col className="event-subtitle-simple">{subtitle}</Col>
          </Row>
          <Row>
            <Col className="event-dateRange-simple">{dateRange}</Col>
          </Row>
          <Row className="event-descriptionRow-simple">
            <Col>{description}</Col>
          </Row>
        </Container>
        <Image
          className="event-image-simple"
          src={ImageOne}
          style={{
            height: "250px",
            width: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />
      </Container>
      <Row className="event-techList-simple">
        <Col xs={12}>
          <ul className="event-techList-simple">{tech}</ul>
        </Col>
      </Row>
    </Container>
  );
};

/*
   <Card className="event-card-s" key={id}>
      <Container>
        <Row>
          <Col>
            <Card.Title className="event-title-s">{title}</Card.Title>
            <Card.Subtitle className="event-subtitle-s">
              {subtitle}
            </Card.Subtitle>
            <Card.Subtitle className="event-date-s">{dateRange}</Card.Subtitle>
            <Card.Text className="event-description-s">{description}</Card.Text>
          </Col>
        </Row>
      </Container>
    </Card>
*/

/*
 <ul className="event-tech-list" style={styles.eventTechList}>
            {tech}
          </ul>
*/

export default EventDisplaySimple;
