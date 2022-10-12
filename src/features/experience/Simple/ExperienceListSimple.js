import { Container, Row, Col } from "reactstrap";
import { EVENTS } from "../../../app/shared/experienceEvents";
import EventDisplaySimple from "./EventDisplaySimple";

const ExperienceListSimple = () => {
  return (
    <Row style={{ marginTop: "20px" }}>
      {EVENTS.map((event) => {
        return (
          event && (
            <Col key={event.id} xs={12}>
              <EventDisplaySimple event={event} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default ExperienceListSimple;
