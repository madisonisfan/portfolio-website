import { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";

const ContactColumn = () => {
  const [modalOpen, toggleModal] = useState(false);

  return (
    <>
      <div
        className="d-flex flex-column d-none d-md-block"
        style={{
          backgroundColor: "#171629",
          width: "50px",
          position: "fixed",
          bottom: "0",
          //bottom: height / 2,
          //bottom: "200px",
        }}
      >
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

        <a
          href="https://www.linkedin.com/in/madison-isfan/"
          style={{ color: "#8b50e3" }}
        >
          <i
            className="fa fa-linkedin"
            style={{ fontSize: "30px", paddingTop: "50px" }}
          />
        </a>

        <a href="https://github.com/madisonisfan" style={{ color: "#8b50e3" }}>
          <i
            className="fa fa-github fa-lg"
            style={{ fontSize: "30px", paddingTop: "50px" }}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCuTP6I1OS2lGOI8Qq4CD3VA"
          style={{ color: "#8b50e3" }}
        >
          <i
            className="fa fa-youtube-play fa-lg"
            style={{ fontSize: "30px", paddingTop: "50px" }}
          />
        </a>
        <div
          style={{
            height: "150px",
            backgroundColor: "#8b50e3",
            width: "1px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
          }}
        ></div>
      </div>
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
    </>
  );
};

export default ContactColumn;
