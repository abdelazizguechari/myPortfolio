import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { styles } from "../styles";
import { navLinks } from "../constants"; // Import the navLinks function
import { logo, menu, close } from "../assets";
import { FaGlobe } from 'react-icons/fa'; // Import the globe icon from react-icons

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation(); // Hook for translation

  const [languageToggle, setLanguageToggle] = useState(false); // State for toggling language dropdown

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to change language
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageToggle(false); // Close the dropdown after selecting a language
  };

  // Call navLinks() to get the array of navigation items
  const links = navLinks();

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-11 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {Array.isArray(links) &&
            links.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{t(nav.title)}</a> {/* Use translation here */}
              </li>
            ))}

          {/* Language dropdown */}
          <div className="relative top-[-4px]">
            <button
              className="text-white px-4 py-2 font-medium flex items-center gap-2"
              onClick={() => setLanguageToggle(!languageToggle)} // Toggle language menu
            >
              <FaGlobe className="text-xl" /> {/* Globe Icon */}
            </button>

            {languageToggle && (
              <div className="absolute top-10 right-0 bg-white p-2 rounded-lg shadow-lg">
                <ul className="list-none">
                  <li
                    onClick={() => handleLanguageChange('en')}
                    className="cursor-pointer text-black py-1 px-2 hover:bg-gray-200"
                  >
                    English
                  </li>
                  <li
                    onClick={() => handleLanguageChange('fr')}
                    className="cursor-pointer text-black py-1 px-2 hover:bg-gray-200"
                  >
                    Français
                  </li>
                  <li
                    onClick={() => handleLanguageChange('ar')}
                    className="cursor-pointer text-black py-1 px-2 hover:bg-gray-200"
                  >
                    العربية
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {Array.isArray(links) &&
                links.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{t(nav.title)}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
