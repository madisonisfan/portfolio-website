import { Row, Col } from "reactstrap";
import { PROJECTS } from "../../app/shared/projects";
import ProjectDisplay from "../projects/ProjectDisplay";
import SmallProjectDisplay from "../projects/SmallProjectDisplay";
import { useState, useEffect } from "react";
import { isBrowser } from "framer-motion";

const ProjectList = () => {
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
      <Col
        style={{
          fontSize: 20,
          color: "white !important",
          backgroundColor: "white",
        }}
      >
        {isBelowLg}
      </Col>

      {PROJECTS.map((project) => {
        return (
          project && (
            <Col xs={12} mb="10" key={project.id}>
              {/* <ProjectDisplay project={project} /> */}
              {isBelowLg && <SmallProjectDisplay project={project} />}
              {!isBelowLg && <ProjectDisplay project={project} />}
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default ProjectList;
