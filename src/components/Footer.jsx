import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className=" bg-transparent text-white py-8">
      <div className="container mx-auto px-4">
    
        <div className="flex flex-col md:flex-row justify-between items-center">
        
          <div className="mb-6 md:mb-0">
            <img src={logo} alt='logo' className='h-11 object-contain' />
          </div>

   
         
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        
          <p className="mb-4 md:mb-0 text-gray-400">&copy; {new Date().getFullYear()} Gr. All rights reserved.</p>

         
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/aziz.gr.3557" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="https://www.tiktok.com/@az_gu1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Tiktok
            </a>
            <a href="https://www.instagram.com/az_gu/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/abdelaziz-guechari-web-developer-graphic-designer-370877251/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
