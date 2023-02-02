import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";

const ProjectDisplay = ({ project }) => {
  const { id, title, description, images } = project;
  const [belowLg, setBelowLg] = useState(false);

  const styles = {
    projectImage: {
      marginRight: id % 2 == 0 ? "auto" : "0",
      marginLeft: id % 2 == 0 ? "0" : "auto",
      maxWidth: "60%",
      maxHeight: "350px",
    },
    projectOverlay: {
      //height: "450px",
      //alignItems: "center",
      justifyContent: id % 2 == 0 ? "end" : "start",
    },
    projectTitle: {
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },
    /*
    projectTechList: {
      justifyContent: id % 2 == 0 ? "end" : "start",
      marginTop: "10px",
    },*/
    projectDescriptionRow: {
      justifyContent: id % 2 == 0 ? "end" : "start",
    },
    projectDescriptionText: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },
    /*projectDate: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },*/
    /*
    projectSubtitle: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
    },*/

    projectRow: {
      textAlign: belowLg ? "left" : id % 2 == 0 ? "right" : "left",
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },

    readMoreButtonRow: {
      justifyContent: belowLg ? "start" : id % 2 == 0 ? "end" : "start",
    },
  };

  useEffect(() => {
    if (window.innerWidth < 992) {
      setBelowLg(true);
    } else if (window.innerWidth >= 992) {
      setBelowLg(false);
    }
  }, []);

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
    <Card className="project-card">
      <Image
        src={images[0]}
        className="project-image"
        style={styles.projectImage}
        rounded
      />
      <Card.ImgOverlay className="project-card-img-overlay">
        <Container className="p-0" styles={styles.projectOverlay}>
          <Row style={styles.projectRow}>
            <Col xs={12}>
              <div className="project-title d-flex" style={styles.projectTitle}>
                <div className="d-none d-sm-block">|</div>
                <div
                  className="ps-0 ps-sm-3 pe-3"
                  style={{ paddingTop: "2px" }}
                >
                  <p>{title}</p>
                </div>
                <div className="d-none d-sm-block"> | </div>
              </div>

              {/*<Card.Subtitle
                className="project-subtitle"
                style={styles.projectSubtitle}
              >
                {subtitle}
  </Card.Subtitle>*/}
              {/*<Card.Subtitle className="event-date" style={styles.eDate}>
                {dateRange}
  </Card.Subtitle>*/}
              <Row className="d-flex" style={styles.projectDescriptionRow}>
                <Col lg={8}>
                  <Card.Text
                    className="project-description"
                    style={styles.projectDescriptionText}
                  >
                    {description}
                  </Card.Text>
                </Col>
              </Row>

              {/*<ul className="event-tech-list">
                <div
                  className="d-flex event-tech-list"
                  style={styles.eventTechList}
                >
                  <Seperator /> {tech}
                </div>
</ul>*/}
              <Row style={styles.readMoreButtonRow}>
                <Col xs={5}>
                  {" "}
                  <button
                    className="read-more-butt"
                    // onClick={() => toggleDetailOpen(true)}
                  >
                    Read More
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ProjectDisplay;
