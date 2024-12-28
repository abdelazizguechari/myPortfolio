import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import "./index.css";

function LanguageHandler() {
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'en';

  React.useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang]);

  return null;
}

function Root() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LanguageHandler />
        <Routes>
          <Route path="/:lang/*" element={<App />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
