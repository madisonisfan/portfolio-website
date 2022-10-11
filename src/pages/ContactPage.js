import { Container, Row, Col, Card } from "reactstrap";
import { PageTitle } from "../components/PageTitle";
<script
  src="https://kit.fontawesome.com/36ef70dbe7.js"
  crossorigin="anonymous"
></script>;

const Contact = () => {
  return (
    <Container className="contact-page">
      <PageTitle pageTitle="Contact Me" />

      <Row className="contact-item">
        <Col>Located in Los Angeles, California</Col>
      </Row>
      <Row className="contact-item">
        <Col>isfanmadison@gmail.com</Col>
      </Row>
      <Row className="contact-item">
        <Col xs={2}>
          <a
            href="https://github.com/madisonisfan"
            style={{ color: "#8b50e3" }}
          >
            <i className="fa fa-github fa-lg" />
          </a>
        </Col>
        <Col xs={2}>
          <a
            href="https://www.linkedin.com/in/madison-isfan/"
            style={{ color: "#8b50e3" }}
          >
            <i className="fa fa-linkedin fa-lg" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
