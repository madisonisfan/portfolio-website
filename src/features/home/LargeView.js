import Image from "react-bootstrap/Image";

const LargePointView = ({ point }) => {
  return (
    <div className="tAI-box d-flex">
      <div
        style={{
          paddingRight: 50,
        }}
      >
        <div className="d-flex tAI-subtitle">
          <div className="d-none d-sm-block">|</div>
          <div className="ps-0 ps-sm-3 pe-3" style={{ paddingTop: "2px" }}>
            <p>{point.title}</p>
          </div>
          <div className="d-none d-sm-block"> | </div>
        </div>

        <div className="tAI-description">
          {" "}
          {point.textPoints.map((textPoint) => {
            return <div style={{ marginBottom: 15 }}> {textPoint}</div>;
          })}
        </div>
      </div>
      <div>
        <Image
          src={point.image}
          style={{
            width: 250,
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default LargePointView;
