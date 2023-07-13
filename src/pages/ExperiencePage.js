import { Container, Row, Col } from "reactstrap";
//import ExperienceEvents from "../features/experience/Complex/ExperienceList";
//import ExperienceListSimple from "../features/experience/Simple/ExperienceListSimple";
import { useState, useEffect } from "react";

import PageTitleThree from "../components/PageTitle3";

const ExperiencePage = () => {
  return (
    <Container fluid className="event-page">
      <PageTitleThree pageTitle="Experience" />
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
