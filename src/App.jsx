import { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

import { About, Contact, Experience, Feedbacks, Hero, Gallery, Navbar, Tech, Works, Footer } from "./components";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  const { i18n } = useTranslation(); // Access the i18n instance

  // Update the 'dir' attribute when language changes
  useEffect(() => {
    const languageDirection = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', languageDirection); // Set the direction of the document
  }, [i18n.language]); // Run this effect when the language changes

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
