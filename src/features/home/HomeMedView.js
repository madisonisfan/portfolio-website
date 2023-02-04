import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "react-bootstrap/Image";

/*
const variants = {
  open: {},
  closed: { height: 25 },
};*/
const variants = {
  open: {
    //xopacity: 1
    height: "100%",
  },
  closed: {
    height: 100,
    //transition: { duration: 0.5, type: "spring" },
    //height: 100
    //opacity: 0
  },
};

const HomeMediumPoint = ({ point }) => {
  const { text, title, image, textPoints } = point;
  const [isTextOpen, toggleText] = useState(false);
  const [greenOpen, toggleGreen] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 className="tAI-subtitle">{title}medium</h2>

      <div
        className="d-flex flex-direction-row"
        style={{ flexDirection: "row" }}
      >
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "15px",
            //flexDirection: "row",
            // marginTop: "10px",
            marginRight: "20px",
            textAlign: "left",
            backgroundColor: "#404040",
            color: "rgb(206, 205, 205)",
            //marginBottom: "20px",
          }}
        >
          <motion.div
            animate={isTextOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 1, type: "spring" }}
            style={{ overflow: "hidden" }}
          >
            {textPoints.map((textPoint) => {
              return <div style={{ marginBottom: 15 }}> {textPoint}</div>;
            })}
          </motion.div>
          <div>
            <button
              onClick={() => toggleText(!isTextOpen)}
              className="show-more-butt"
            >
              {isTextOpen ? (
                <i className="fa fa-angle-up" style={{ fontSize: 25 }} />
              ) : (
                <i className="fa fa-angle-down" style={{ fontSize: 25 }} />
              )}
            </button>
          </div>
        </div>
        <div layout>
          <Image
            src={image}
            style={{
              width: 250,
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMediumPoint;
