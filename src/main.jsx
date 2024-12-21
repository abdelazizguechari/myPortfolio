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
    const checkI18nInitialization = async () => {
      if (i18n.isInitialized) {
        setIsLoading(false);
      } else {
        // Wait for i18n initialization
        await i18n.init();
        setIsLoading(false);
      }
    };

    checkI18nInitialization();
  }, []);

  if (isLoading) {
    return <div>Loading translations...</div>;
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
