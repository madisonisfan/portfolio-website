import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { PageTitle } from "../components/PageTitle";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Seperator from "../components/Seperator";

const HomePage = () => {
  const [isContactModalOpen, toggleContactModal] = useState(false);

  return (
    /* <div
      className="d-flex align-items-center"
      style={{
        height: "500px",
        width: "100px",
        border: "solid",
        borderColor: "yellow",
        marginLeft: "50%",
      }}
    >
      <div style={{ color: "white", border: "solid", borderColor: "pink" }}>
        Hello
      </div>
    </div>*/

    <Container className="home-page">
      <Header />
      <Row className="bottom-subtitle">
        <Col>[ Full-Stack Software Developer ]</Col>
      </Row>
      <Row className="button-row ">
        <Col xs={12}>
          <Button className="home-button" style={{ justifyContent: "center" }}>
            <div className="d-flex">
              <Seperator /> Resume <Seperator />
            </div>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

/*
<Col>
          <Button
            className="home-button d-flex"
            onClick={() => toggleContactModal(!isContactModalOpen)}
          >
            <Seperator /> Contact <Seperator />
          </Button>
        </Col>
*/

/**
 <Modal
        centered
        style={{
          height: "50%",
        }}
        isOpen={isContactModalOpen}
        toggle={toggleContactModal}
      >
        <ModalHeader style={{ textAlign: "center" }}>Contact Me</ModalHeader>
        <ModalBody>
          <div>isfanmadison@gmail.com</div>
          <a
            href="https://www.linkedin.com/in/madison-isfan/"
            style={{ color: "#8b50e3" }}
          >
            <i className="fa fa-linkedin fa-lg" />
          </a>
          <a
            href="https://github.com/madisonisfan"
            style={{ color: "#8b50e3" }}
          >
            <i className="fa fa-github fa-lg" />
          </a>
        </ModalBody>
      </Modal>

*/

const Header = () => {
  return (
    <Container
      style={{
        textAlign: "center",

        //width: "50%",
      }}
    >
      <Row
        className="top-subtitle"
        style={{
          justifyContent: "center",
        }}
      >
        <Col>Hello, World! My name is</Col>
      </Row>
      <Row>
        <Col className="name">Madison Isfan</Col>
      </Row>
    </Container>
  );
};

// <PageTitle pageTitle="Home" />
export default HomePage;

const string =
  "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.";
