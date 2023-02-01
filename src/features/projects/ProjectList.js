import { Row, Col } from "reactstrap";
import { PROJECTS } from "../../app/shared/projects";
import ProjectDisplay from "./projectDisplay";

const ProjectList = () => {
  return (
    <Row>
      {PROJECTS.map((project) => {
        return (
          project && (
            <Col xs={12} mb="10" key={project.id}>
              <ProjectDisplay project={project} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default ProjectList;
