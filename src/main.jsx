import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from './App'; // Import your App component
import i18n from './i18n'; // Import the i18n instance
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import "./index.css";

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure that i18n is initialized
    const initializeI18n = async () => {
      if (!i18n.isInitialized) {
        await i18n.init(); // Wait for initialization
      }
      setIsLoading(false); // Set loading state to false after initialization
    };

    initializeI18n(); // Trigger i18n initialization
  }, []); // Empty dependency array ensures this runs once

  if (isLoading) {
    return <div>Loading translations...</div>; // Show loading state while translations load
  }

  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
