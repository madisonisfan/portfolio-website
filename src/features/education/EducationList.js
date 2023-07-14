import { Row, Col } from "reactstrap";
import { EDUCATION } from "../../app/shared/education";
import ProjectDisplay from "../projects/ProjectDisplay";
import { useState, useEffect } from "react";
import SmallProjectDisplay from "../projects/SmallProjectDisplay";

const EducationList = () => {
  const [isBelowLg, setBelowLg] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setBelowLg(true);
      } else if (window.innerWidth >= 992) {
        setBelowLg(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Row>
      {EDUCATION.map((project) => {
        return (
          project && (
            <Col xs={12} mb="10" key={project.id}>
              {isBelowLg && <SmallProjectDisplay project={project} />}
              {!isBelowLg && <ProjectDisplay project={project} />}
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default EducationList;
