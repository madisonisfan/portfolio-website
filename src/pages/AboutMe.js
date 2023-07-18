import { Container, Row, Col } from "reactstrap";
import PageTitleThree from "../components/PageTitle3";
import { About } from "../app/shared/about";

const AboutPage = () => {
  return (
    <Container
      fluid
      className="project-page-container"
      style={{ marginTop: "100px" }}
    >
      <PageTitleThree pageTitle="About Me" />
      {About.map((point) => {
        return (
          <Row>
            <Col className="about-me-point">
              <div dangerouslySetInnerHTML={{ __html: point }} />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default AboutPage;
