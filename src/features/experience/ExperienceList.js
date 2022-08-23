import { EVENTS } from "../../app/shared/experienceEvents";
import { EventDisplay } from "./EventDisplay";
import { Row, Col } from "reactstrap";

const ExperienceEvents = () => {
  return (
    <Row>
      {EVENTS.map((event) => {
        return (
          event && (
            <Col xs={12} mb="10" key={event.id}>
              <EventDisplay event={event} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default ExperienceEvents;
