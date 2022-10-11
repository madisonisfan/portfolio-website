import { Container, Row, Col } from "reactstrap";
import { EVENTS } from "../../../app/shared/experienceEvents";
import EventDisplaySimple from "./EventDisplaySimple";

const ExperienceListSimple = () => {
  return (
    <Row>
      {EVENTS.map((event) => {
        return (
          event && (
            <Col key={event.id}>
              <EventDisplaySimple event={event} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default ExperienceListSimple;
