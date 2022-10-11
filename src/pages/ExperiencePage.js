import { Container, Row, Col } from "reactstrap";
import { PageTitle } from "../components/PageTitle";
import ExperienceEvents from "../features/experience/Complex/ExperienceList";
import ExperienceListSimple from "../features/experience/Simple/ExperienceListSimple";
import { useState, useEffect } from "react";

const ExperiencePage = () => {
  return (
    <Container className="event-page">
      <PageTitle pageTitle="Experience" />
      <ExperienceListSimple />
    </Container>
  );
};

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
