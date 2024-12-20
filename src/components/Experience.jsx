
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
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Experience = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t('work.sectionSubText')}  {/* Use translated text */}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t('work.sectionHeadText')}  {/* Use translated text */}
        </h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
