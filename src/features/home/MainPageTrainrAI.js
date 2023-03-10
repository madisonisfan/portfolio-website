import PageTitleThree from "../../components/PageTitle3";
import SimpleHomePoint from "./SmallView";
import LargePointView from "./LargeView";
import HomeMediumPoint from "./HomeMedView";
import { TRAINRAI_POINTS } from "../../app/shared/trainrAI_info";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

const MainPageTrainrAI = () => {
  return (
    <Container className="tAI-container">
      <div
        className="d-block d-md-none"
        style={{
          fontWeight: "700",
          color: "white",
          fontSize: 30,
          textAlign: "left",
          marginBottom: "50px",
        }}
      >
        Spotlight Project: TrainrAI
      </div>

      <div className="d-none d-md-block">
        <PageTitleThree pageTitle="Spotlight Project: TrainrAI" />
      </div>

      {TRAINRAI_POINTS.map((point) => {
        return (
          <>
            <div className="d-block d-md-none">
              <SimpleHomePoint point={point} />
            </div>

            <div className="d-none d-md-block">
              <LargePointView point={point} />
            </div>
          </>
        );
      })}
    </Container>
  );
};

/*
<div className="d-block d-md-none">
              <SimpleHomePoint point={point} />
            </div>
            <div className="d-none d-lg-block d-xl-none">
              <HomeMediumPoint point={point} />
            </div>
            <div className="d-none d-xl-block">
              <LargePointView point={point} />
            </div>
*/

export default MainPageTrainrAI;

/*
KEEEEP!!!

 <div className="tAI-box d-flex">
            <div
              style={{
                paddingRight: 50,
              }}
            >
              <div className="d-flex tAI-subtitle">
                <div className="d-none d-sm-block">|</div>
                <div
                  className="ps-0 ps-sm-3 pe-3"
                  style={{ paddingTop: "2px" }}
                >
                  <p>{item.title}</p>
                </div>
                <div className="d-none d-sm-block"> | </div>
              </div>

              <p className="tAI-description">{item.text}</p>
            </div>
            <div>
              <Image
                src={item.image}
                style={{
                  width: 250,
                  height: "auto",
                }}
              />
            </div>
          </div>


*/
