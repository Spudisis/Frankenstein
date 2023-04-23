import React from "react";

import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "src/routes/Routes";
import "src/UI/theme.css";
import "src/UI/resize.css";

function App() {
  const { i18n } = useTranslation();
  const locale = navigator.language;

  React.useLayoutEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </I18nextProvider>
    </div>
  );
}

export default App;
