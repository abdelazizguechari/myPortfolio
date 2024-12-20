import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next"; // Import the hook for translations

import { styles } from "../styles";
import { services } from "../constants"; // Import the services function
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div className="w-full p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#040619] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  const { t, i18n } = useTranslation(); // Initialize translation function
  const [translatedServices, setTranslatedServices] = useState([]); // State for services

  // Fetch services and translate titles dynamically
  useEffect(() => {
    const translated = services().map((service) => ({
      ...service,
      title: t(service.title), // Translate title here
    }));
    setTranslatedServices(translated); // Update state with translated services
  }, [i18n.language, t]); // Re-run the effect when language or t() function changes

  // Add a key to force re-render the card list when language changes
  const servicesKey = `services-${i18n.language}`;

  return (
    <>
      <section id="about">
        <p className={styles.sectionSubText}>{t("aboutSection.sectionSubText")}</p>
        <h2 className={styles.sectionHeadText}>{t("aboutSection.sectionHeadText")}</h2>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {t("aboutSection.introText")}
        </p>

        <div className="mt-20 flex flex-wrap gap-10" key={servicesKey}>
          {translatedServices.map((service, index) => (
            <ServiceCard key={service.title + i18n.language} index={index} {...service} />
            // Using `i18n.language` in the key to force re-render on language change
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "aboutSection");
