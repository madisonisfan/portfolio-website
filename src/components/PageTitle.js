import { Container, Row, Col } from "reactstrap";

export const PageTitle = ({ pageTitle }) => {
  return (
    <Row>
      <Col xs={12} className="page-title">
        {pageTitle}
      </Col>
    </Row>
  );
};
