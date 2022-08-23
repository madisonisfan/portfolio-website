import { Container, Row, Col } from "reactstrap";
import { PageTitle } from "../components/PageTitle";
import ExperienceEvents from "../features/experience/ExperienceList";

const ExperiencePage = () => {
  return (
    <Container className="event-page">
      <PageTitle pageTitle="Experience" />
      <ExperienceEvents />
    </Container>
  );
};

export default ExperiencePage;
