import { Row, Col } from "reactstrap";
import ImageOne from "../../app/assets/images/sample_images/cartoonWebsite.jpg";

export const EventDetail = ({ event }) => {
  const {
    title,
    dateRange,
    description,
    photos,
    id,
    subtitle,
    technology,
    descriptionPoints,
  } = event;

  const descriptionList = descriptionPoints.map((point) => {
    return <li className="event-description-point">{point}</li>;
  });

  return (
    <Row style={{ color: "white" }}>
      <Col>
        <img src={ImageOne} alt="image not found" />
      </Col>
      <Col>
        <ul className="event-description-points">{descriptionList}</ul>
      </Col>
    </Row>
  );
};
