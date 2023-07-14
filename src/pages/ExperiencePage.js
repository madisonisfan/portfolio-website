import { Container, Row, Col } from "reactstrap";
import ExperienceList from "../features/experience/ExperienceList";

import { useState, useEffect } from "react";

import PageTitleThree from "../components/PageTitle3";

const ExperiencePage = () => {
  return (
    <Container fluid className="project-page-container">
      <PageTitleThree pageTitle="Experience" />
      <ExperienceList />
    </Container>
  );
};

/*

 <Row>
        <Col className="experience-mainTitle-simple">My Experience</Col>
      </Row>

      */

//<PageTitle pageTitle="Experience" />
////<ExperienceEvents />

export default ExperiencePage;

/*
 isBelowMd={isBelowMd}
  const [isBelowMd, setBelowMd] = useState(window.innerWidth < 768);
  const updateMedia = () => {
    setBelowMd(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

*/
