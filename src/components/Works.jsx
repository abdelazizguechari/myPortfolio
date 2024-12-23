import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import the hook for translations

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"; // Import the projects function
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">
          {t(`projects.${name}.name`)} {/* Translate project name */}
        </h3>
        <p className="mt-2 text-secondary text-[14px]">
          {t(`projects.${name}.description`)} {/* Translate project description */}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{t(`tags.${tag.name}`)} {/* Translate tag name */}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  const { t, i18n } = useTranslation(); // Initialize translation function
  const [translatedProjects, setTranslatedProjects] = useState([]); // State for translated projects

  // Translate project data dynamically using JSON translations
  useEffect(() => {
    const translated = projects().map((project) => ({
      ...project,
      name: t(`${project.name}`), // Translate project name using t()
      description: t(`${project.name}`), // Translate project description using t()
      tags: project.tags.map((tag) => ({
        ...tag,
        name: t(`tags.${tag.name}`), // Translate tag name using t()
      })),
    }));
    setTranslatedProjects(translated); // Update the state with translated projects
  }, [i18n.language, t]); // Re-run when language or t() function changes

  // Add a key to force re-render the project list when language changes
  const projectsKey = `projects-${i18n.language}`;

  return (
    <section id="project">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          {t("projectsSection.sectionSubText")} {/* Translate section subtitle */}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          {t("projectsSection.sectionHeadText")} {/* Translate section heading */}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("projectsSection.introText")} {/* Translate intro text */}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7" key={projectsKey}>
        {translatedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
