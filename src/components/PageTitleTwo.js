import { Container, Row, Col } from "reactstrap";

export const PageTitleTwo = ({ pageTitle }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div>
        <p
          className="page-title-two"
          style={{
            width: "300px",
            textAlign: "left",
          }}
        >
          {pageTitle}
        </p>
      </div>

      <div className="page-title-line" />
    </div>
  );
};
