import { Row, Col } from "reactstrap";
import { EXPERIENCE } from "../../app/shared/experience";
import ProjectDisplay from "../projects/ProjectDisplay";
import SmallProjectDisplay from "../projects/SmallProjectDisplay";
import { useState, useEffect } from "react";

const ExperienceList = () => {
  const [isBelowLg, setBelowLg] = useState(false);

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
      {EXPERIENCE.map((project) => {
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

export default ExperienceList;
