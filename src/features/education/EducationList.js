import { Row, Col } from "reactstrap";
import { EDUCATION } from "../../app/shared/education";
import ProjectDisplay from "../projects/ProjectDisplay";

const EducationList = () => {
  return (
    <Row>
      {EDUCATION.map((project) => {
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

export default EducationList;
