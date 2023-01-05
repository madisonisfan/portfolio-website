import { Container, Row, Col } from "reactstrap";
import { PageTitle } from "../components/PageTitle";
import { useParams } from "react-router-dom";
import { EVENTS } from "../app/shared/experienceEvents";
import { EventDetail } from "../features/experience/Complex/EventDetail";
import PageTitleThree from "../components/PageTitle3";

const ExperienceDetailPage = () => {
  const { eventId } = useParams();
  const event = EVENTS.find((event) => event.id === parseInt(eventId));
  let content = null;

  if (event) {
    content = (
      <>
        <PageTitleThree pageTitle={event.title} />
        <EventDetail event={event} />
      </>
    );
  } else {
    content = (
      <Row>
        <Col>Event not found.</Col>
      </Row>
    );
  }

  return (
    <Container fluid className="event-detail-page">
      {content}
    </Container>
  );
};

export default ExperienceDetailPage;
