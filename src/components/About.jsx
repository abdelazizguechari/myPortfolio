import React from "react";
import { Tilt } from "react-tilt";

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
  return (
    <section id="about">
      {/* Static text */}
      <p className={styles.sectionSubText}>About</p>
      <h2 className={styles.sectionHeadText}>About Me</h2>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
     I am a passionate web developer and designer, focused on creating seamless user experiences. With expertise in both design and development, I blend creativity with technical skills to deliver high-quality, user-friendly websites and applications. From clean, intuitive interfaces to robust back-end solutions, I strive to bring ideas to life with a focus on both form and function
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services().map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "aboutSection");
