import { Container } from "reactstrap";
import PageTitleThree from "../components/PageTitle3";
import ProjectList from "../features/projects/ProjectList";

const ProjectsPage = () => {
  return (
    <Container fluid className="project-page-container">
      <PageTitleThree pageTitle="Projects" />
      <ProjectList />
    </Container>
  );
};

export default ProjectsPage;
