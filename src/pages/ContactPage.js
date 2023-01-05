import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  ModalBody,
  Button,
} from "reactstrap";
import PageTitleThree from "../components/PageTitle3";
import { useState } from "react";

/*
<script
  src="https://kit.fontawesome.com/36ef70dbe7.js"
  crossorigin="anonymous"
></script>;*/

const Contact = () => {
  const [modalOpen, toggleModal] = useState(false);
  return (
    <Container className="contact-page">
      <PageTitleThree pageTitle="Contact Me" />

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
        <Col>
          <a
            href="https://www.youtube.com/channel/UCuTP6I1OS2lGOI8Qq4CD3VA"
            style={{ color: "#8b50e3" }}
          >
            <i
              className="fa fa-youtube-play fa-lg"
              style={{ fontSize: "30px", paddingTop: "50px" }}
            />
          </a>
        </Col>
        <Col>
          <Button
            outline
            onClick={() => toggleModal(!modalOpen)}
            style={{
              borderColor: "#171729",
              padding: 0,
              margin: 0,
            }}
          >
            <i
              className="fa fa-envelope"
              style={{ color: "#8b50e3", fontSize: "28px" }}
            />
          </Button>
        </Col>
      </Row>
      <Modal
        isOpen={modalOpen}
        toggle={() => toggleModal(!modalOpen)}
        className="email-modal"
        centered
      >
        <ModalBody className="email-modal-body">
          <a href="mailto:yourmail@domain.com" className="email-link">
            isfanmadison@gmail.com
          </a>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default Contact;

/*
<Row className="contact-item">
        <Col>Located in Los Angeles, California</Col>
      </Row>
      <Row className="contact-item">
        <Col>isfanmadison@gmail.com</Col>
      </Row>

*/
