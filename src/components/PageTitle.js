import { Container, Row, Col } from "reactstrap";

export const PageTitle = ({ pageTitle }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div className="page-title-line" />

      <div>
        <p
          className="page-title"
          style={{
            width: "300px",
            textAlign: "center",
          }}
        >
          {pageTitle}
        </p>
      </div>

      <div className="page-title-line" />
    </div>
  );
};
