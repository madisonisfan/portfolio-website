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

const SimpleHomePoint = ({ point }) => {
  const { text, title, image, textPoints } = point;
  const [isTextOpen, toggleText] = useState(false);
  const [greenOpen, toggleGreen] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 className="tAI-subtitle">{title}</h2>

      <div
        // layout
        className="description-box-home"
        style={{
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "15px",
        }}
      >
        <motion.div
          //layout
          //initial={{ height: "50px" }}
          // animate={{ height: "100px" }}
          // initial={{ height: 100 }}
          animate={isTextOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 1, type: "spring" }}
          //transition={{ duration: 1 }}
          //style={{ overflow: isTextOpen ? "auto" : "hidden" }}
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
      <div>
        <Image
          src={image}
          style={{
            width: 250,
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

/*
<motion.div>
        <Image
          src={image}
          style={{
            width: 250,
            height: "auto",
          }}
        />
      </motion.div>

*/

export default SimpleHomePoint;

/*
      <motion.div layout style={{ marginBottom: "20px" }}>
        <motion.h2 layout className="tAI-subtitle">
        {title}
  </motion.h2> 

        <motion.div
        // layout
        //className="description-box-home"
        style={{
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "15px",
        }}
        >
          <motion.div
            initial={false}
            //layout
            //initial={{ height: "50px" }}
            // animate={{ height: "100px" }}
            // initial={{ height: 100 }}
            animate={isTextOpen ? "open" : "closed"}
            variants={variants}
            //transition={{ duration: 2, type: "spring" }}
            //transition={{ duration: 1 }}
            //style={{ overflow: isTextOpen ? "auto" : "hidden" }}
            style={{ overflow: "auto" }}
          >
            {text}
          </motion.div>
          <motion.div layout>
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
          </motion.div>
        </motion.div>

       
      <div>
        <Image
          src={image}
          style={{
            width: 250,
            height: "auto",
          }}
        />
      </div>
      </motion.div>
    */
