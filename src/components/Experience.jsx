import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies  {/* Static text */}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         Technologies I Use {/* Static text */}
        </h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
