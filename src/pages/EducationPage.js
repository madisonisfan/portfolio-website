import { Container, Row, Col } from "reactstrap";
import PageTitleThree from "../components/PageTitle3";
import EducationList from "../features/education/EducationList";

const EducationPage = () => {
  return (
    <Container fluid className="project-page-container">
      <PageTitleThree pageTitle="Education" />
      <EducationList />
    </Container>
  );
};

export default EducationPage;
