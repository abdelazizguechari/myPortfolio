import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { About, Contact, Experience, Feedbacks, Hero, Gallery, Navbar, Tech, Works, Footer, StarsCanvas } from './components';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const languageDirection = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", languageDirection);
  }, [i18n.language]);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
  );
};

export default App;
